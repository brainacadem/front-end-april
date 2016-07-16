(function() {

    var arrInputId = [document.getElementById('title'),
        document.getElementById('text'),
        document.getElementById('author'),
        document.getElementById('photo'),
        document.getElementById('submit')
    ];

    arrInputId[4].addEventListener('click', function(e) {

        e.preventDefault();

        var newPage = {
            'title': arrInputId[0].value,
            'text': arrInputId[1].value,
            'author': arrInputId[2].value,
            'photo': arrInputId[3].value
        };

        for (let i = 0; i < arrInputId.length - 1; i++) {
            arrInputId[i].value = '';
        }

        console.log(newPage);

        var options = {
            method: "POST",
            url: '/article/create/',
            async: true,
            dataType: "json",
            body: newPage
        };

        blog.Utils.sendRequest(options, function(error, data) {
            if (error) throw handlerError(error);
            console.log(data);
        })

    });
})();
