// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-chat';

// Port where we'll run the websocket server
var webSocketsServerPort = 1337;

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
var url = require("url");
var st = require('node-static');

var fileServer = new st.Server('./');

/**
 * Global variables
 */
// latest 100 messages
var history = [ ];
// list of currently connected clients (users)
var clients = [ ];

var typing = {};
var aliveUsers = {};
var forPrivate = {};

/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Array with some colors
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];

function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
	var _get = url.parse(request.url, true).query; 
	fileServer.serve(request, response);
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    // accept connection - you should check 'request.origin' to make sure that
    // client is connecting from your website
    // (http://en.wikipedia.org/wiki/Same_origin_policy)
    var connection = request.accept(null, request.origin);
	
    clients.push(connection) - 1;
	
    var typingKey = (Math.round(Math.random() * 100000000)).toString(36);
    var userName = false;
    var userColor = false;

    forPrivate[typingKey] = connection;

    console.log((new Date()) + ' Connection accepted.');

    // send back chat history
    if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));
    }

    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            if (userName === false) { // first message sent by user is their name
                // remember user name
                userName = htmlEntities(message.utf8Data);
                aliveUsers[typingKey] = userName;
                // get random color and send it back to the user
                userColor = getRandomColor();
                connection.sendUTF(JSON.stringify({ type:'color', data: userColor }));
                console.log((new Date()) + ' User is known as: ' + userName
                            + ' with ' + userColor + ' color.');
                sendAll('alive', aliveUsers);

            } else { // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                            + userName + ': ' + message.utf8Data);

                if (htmlEntities(message.utf8Data) == '{{is typing}}') {
                    if (!typing[typingKey]) {
                        typing[typingKey] = userName;
                        sendAll('typing', typing);
                    }
                    
                } else if (htmlEntities(message.utf8Data) == '{{end typing}}') {
                    delete typing[typingKey];
                    sendAll('typing', typing);
                } else if (/\{\{private.+\}\}/.test(htmlEntities(message.utf8Data))) {
                    var parsedMsg = htmlEntities(message.utf8Data).match(/\{\{private=(.+)\}\}(.+)/);
                    console.log(parsedMsg);
                    var userKey = (parsedMsg && parsedMsg[1]) || '';
                    var message = (parsedMsg && parsedMsg[2]) || '';

                    var obj = {
                        time: (new Date()).getTime(),
                        text: 'To ' + aliveUsers[userKey] + ' ' + htmlEntities(message),
                        author: userName,
                        color: 'red'
                    };
                    connection.sendUTF(JSON.stringify({ type:'message', data: obj }));

                    obj.text = htmlEntities(message);
                    forPrivate[userKey] && forPrivate[userKey].sendUTF(JSON.stringify({ type:'message', data: obj }));

                } else {
                    // we want to keep history of all sent messages
                    var obj = {
                        time: (new Date()).getTime(),
                        text: htmlEntities(message.utf8Data),
                        author: userName,
                        color: userColor
                    };
                    history.push(obj);
                    history = history.slice(-100);
                       
                    // broadcast message to all connected clients
                    sendAll('message', obj);

                }
            }
        }
    });

    function sendAll(type, obj) {
        if (!type && !obj) return;

        var json = JSON.stringify({ type: type, data: obj });

        for (var i=0; i < clients.length; i++) {
            clients[i].sendUTF(json);
        }
    }

    // user disconnected
    connection.on('close', function(closeCode) {
		console.log('Status code:', closeCode);
		
        if (userName !== false && userColor !== false) {
            console.log((new Date()) + " Peer "
                + userName + " disconnected.");
            // remove user from the list of connected clients
			var index = clients.indexOf(connection);
            clients.splice(index, 1);
			//connection.close();
            delete typing[typingKey];
            delete aliveUsers[typingKey];
            delete forPrivate[typingKey];
			
            sendAll('typing', typing);
            sendAll('alive', aliveUsers);
        }
    });

});