function stringMagic(string) {
  document.writeln(' INPUTED : ',string);
  document.writeln('<br> Char at (0): ',string.charAt(0));
  document.writeln('<br> CharCode at (0): ',string.charCodeAt(0));
  document.writeln('<br> CharCode at (1): ',string.charCodeAt(1));
  document.writeln('<br> Slice (1,3): ',string.slice(1,3));
  document.writeln('<br> Substr (0,7) : ',string.substr(0,7));
  document.writeln('<br> Substring (0,3): ',string.substring(0,3));
  document.writeln('<br> Search+RegExp(/"hello"/i): ',string.match(RegExp(/hello/ig)));
  var a=string.match(RegExp(/hello/ig));
  document.writeln('<br> Variable?(/"hello"/i): ',a);
}
function tryCatchPract() {
  var result;
  while (true) {
    try {
      result=eval(prompt("enter an expression"));
      if (isNaN(result)) {
        throw new Error("wrong input!");
      }
      alert(result);
      break;
    } catch (error) {
      alert("ERROR! ",error.message);
    }
  }
}
function sum(a){
  return function(b){
    return a+b;
  };
}

function makeBufferGo() {
  var text="";
  return function(input){
    text+=input;
  };
  console.log(text);
  return text;
}

(function () {
  var obj = {
    firstName:'Tolya',
    secondName:'Pachkov',
    getName:function(){
      return this.firstName;
    };
  };
  var newObject = obj;
  console.log(newObject.getName());
})()