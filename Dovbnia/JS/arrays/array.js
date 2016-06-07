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
  if (n < 0)  
      return [];  
  return array;
}
console.log(getLastElements([7, 9, 0, -2]));
console.log(getLastElements([7, 9, 0, -2],3));
console.log(getLastElements([7, 9, 0, -2],6));

 // 5. Write a simple JavaScript program to join all elements of the following array into a string.
 function join(array, separator) {
    var myColor = array.join(separator);
    return myColor;

};
console.log(join(["Red", "Green", "White", "Black"], ';'));
console.log(join(["Red", "Green", "White", "Black"], ','));
console.log(join(["Red", "Green", "White", "Black"], '+'));

 // 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 function setDashes(string) {
    var result = string[0];
    for (var i = 1; i < string.length; i++) {
        if(string[i] % 2 == 0)
            result += "-" + string[i];
        else
            result += string[i];
    };
    return result;
};

console.log(setDashes("06352863"));

// 7. Write a JavaScript program to sort the items of an array.
function sort(array) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++)
    {
        for (var j = 0; j < n-1-i; j++)
        { 
            if (array[j+1] < array[j])
            { 
                var t = array[j+1]; 
                array[j+1] = array[j]; 
                array[j] = t;
            }
        }
    };
    return array;
};
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sort(arr1));

// 8. Write a JavaScript program to find the most frequent item of an array.
function mostFrequent(array) {
    var maxAttemptCounter = 0;
    var maxAttemptSymbol;
    for (var i = 0; i < array.length; i++) {
        var counter = 0;
        var current = array[i];
        for (var j = 0; j < array.length; j++) {
            if (array[j] == current) {
                counter++;
            };
        }
        if(counter > maxAttemptCounter){
            maxAttemptCounter = counter;
            maxAttemptSymbol = current;
        }
    };
    return [maxAttemptSymbol, maxAttemptCounter];
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var result = mostFrequent(arr1);
console.log("" + result[0] + "(" + result[1] + " times)");

// 9. Write a JavaScript program which accept a string as input and swap the case of each character.
function swapLetter(string) {
    var CAPS  = "ABC";
    var LOWER = "abc";
    var isCaps, isLower, result = '';
    for (var i = 0; i <= string.length; i++) {
        isCaps  = CAPS.indexOf(string[i]) > -1;
        isLover = LOWER.indexOf(string[i]) > -1;
console.log(string[i],isCaps,isLower);
        if (isCaps) {
            result += LOWER.charAt(i);
        } else if (isLower) {
            result += CAPS.charAt(i);
        } else {
            result += string.charAt(i);
        }
    }

    return result;
};
console.log(swapLetter("The Quick Brown Fox"));