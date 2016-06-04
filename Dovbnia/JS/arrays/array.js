// 1. Write a JavaScript function to check whether an `input` is an array or not.
var array = [1, 2, 4, 0]

function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
}
console.log(isArray(array));

// 2. Write a JavaScript function to clone an array.
function cloneArray(array) {
    //if (! isArray(array)) {
    //	return throw new Error("Enter an array!");
    //}
    var clone = [],
        len = array.length;
        
    for (var i = 0; i < len; i++) {
        if (array[i].lenght && array[i].constructor === Array) {
            clone[i] = cloneArray(array[i])
        } else {
            clone[i] = array[i];
        }

    }
    return clone;
}

var a = [1, 2, 4, 0];
var b = cloneArray(a);
console.log(" a :", a);
console.log(" b :", b);

var c = [1, 2, [4, 0]];
var d = cloneArray(c);
console.log(" c :", c);
console.log(" d :", d);

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
    
function getFirstElements(array, n) {
	if (array == null)   
      return void 0;  
    if (n == null)   
      return array[0];  
    if (n < 0)  
      return [];  
    return array.slice(0);
}
 
 console.log(getFirstElements([7, 9, 0, -2]));
 console.log(getFirstElements([],3));
 console.log(getFirstElements([7, 9, 0, -2],3));
 console.log(getFirstElements([7, 9, 0, -2],6));
 console.log(getFirstElements([7, 9, 0, -2], -3));

 // 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
 function getLastElements(array, n) {
    //var array = [];
    if (array == null)   
      return void 0;  
    if (n == null)   
      return array[array.length - 1];  
    var
      newArr = [],
      start = n >= array.length ? 0 : array.length - n;

    for (var i = start; i < array.length; i++) {
      newArr.push(array[i])
    }

    return newArr;
  }
 console.log(getLastElements([7, 9, 0, -2]));
 console.log(getLastElements([7, 9, 0, -2],3));
 console.log(getLastElements([7, 9, 0, -2],6));

 // 5. Write a simple JavaScript program to join all elements of the following array into a string.