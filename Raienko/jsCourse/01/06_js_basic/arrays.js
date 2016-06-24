/*
 1. Write a JavaScript function to check whether an `input` is an array or not.
 Test Data :
 console.log(isArray('w3resource'));
 console.log(isArray([1, 2, 4, 0]));
 false
 true
 */
function isArray(item) {
  return ((typeof item) !== undefined) && (item) && (item.constructor === Array);
}

/*
 2. Write a JavaScript function to clone an array.
 Test Data :
 console.log(cloneArray([1, 2, 4, 0]));
 console.log(cloneArray([1, 2, [4, 0]]));
 [1, 2, 4, 0]
 [1, 2, [4, 0]]

 */
function cloneArray(array) {
  if (!isArray(array)) {
    throw new Error ("ENTER AN ARRAY");
  }
    var i=0,
        clonedArray=[];

    while (i < array.length) {
      if (isArray(array[i])) {
        clonedArray[i]=cloneArray(array[i]);
      } else {clonedArray[i]=array[i];}
      i++;
    }

    console.log(clonedArray);
    return clonedArray;

  //}
}
// !!!!!!!!!!!!!!! return throw new Error ("Enter an array!"); - shut down
// return "enter an array"  - don't kill program.

/*
 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 Test Data :
 console.log(getFirstElements([7, 9, 0, -2]));
 console.log(getFirstElements([],3));
 console.log(getFirstElements([7, 9, 0, -2],3));
 console.log(getFirstElements([7, 9, 0, -2],6));
 console.log(getFirstElements([7, 9, 0, -2],-3));
 Expected Output :
 7
 []
 [7, 9, 0]
 [7, 9, 0, -2]
 []

 */
function getFirstElements(array, n) {

  if (isArray(array)) {
    var i=0;
    var j=0;
    var newArray=[];

    if (Boolean(n)) {
      j=n;
    }

    while (i<j) {
        if (array[i] != undefined) {newArray[i]=array[i];}
        i++;
      }
    console.log(newArray);
    return newArray;

  } else throw new Error ("ENTER AN ARRAY");
}

/*
 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
 Test Data :
 console.log(getLastElements([7, 9, 0, -2]));
 console.log(getLastElements([7, 9, 0, -2],3));
 console.log(getLastElements([7, 9, 0, -2],6));
 Expected Output :
 -2
 [9, 0, -2]
 [7, 9, 0, -2]
 */
function getLastElements(array, n) {

  if (isArray(array)) {
    var i=0;
    var j=0;
    var k=0;
    var l=array.length;

    var newArray=[];

    if (Boolean(n)) {
      j=n;
    }

    while ( i<j) {
        if (array[l-(j-i)] != undefined) {
          newArray[k]=array[l-(j-i)];
          k++;}
        i++;
    }

    console.log(newArray);
    return newArray;

  } else {return false;}
}

/*
 5. Write a simple JavaScript program to join all elements of the following array into a string.
 Sample array : myColor = ["Red", "Green", "White", "Black"];
 Expected Output :
 "Red,Green,White,Black"
 "Red,Green,White,Black"
 "Red+Green+White+Black"
 */
function join(array,separator) {
  if (isArray(array)) {
    var i=0;
    var outputString="";
    var dividingElement=""

    while (i<array.length) {
      
      outputString+=dividingElement+(array[i]);
      
      if (Boolean(separator)) {
        dividingElement=separator;
      } else dividingElement=",";

      i++;
    }
    console.log(outputString);
    return outputString;

  } else {return false;}
}

/*
 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 For example if you accept 025468 the output should be 0-254-6-8.

 */
function setDashes(string) {
  if (string) {
    console.log(string);
    string=string+"";
    if (typeof string == 'string') {
      var i=0;
      var outputString="";
      var dividingElement="";
      var inputLength = string.length;

      while (i<inputLength) {

        if (((string[i]-0) % 2 == 0) && ((string[i+1]-0) % 2 == 0)) {
          dividingElement="-";
        } else {dividingElement="";}
        
        outputString+=string[i]+dividingElement;
        
        i++;
      }

      console.log(outputString);
      return outputString;
    } else {return false;}
  } else {return false;}
}


/*
 7. Write a JavaScript program to sort the items of an array.
 Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 Sample Output : -4,-3,1,2,3,5,6,7,8
 */
function sort(array) {
  if (isArray(array)) {
    
    var outputArray=[];
    var j;
    var len = array.length;
    for (j = 0; j < len; j++) {
      outputArray[j]=array[j];
    }
    console.log("Before sort:",outputArray);
    for (j = 0; j < len-1; j++) {
        var swapped = false;
        var i = 0;
        while (i < len) {
            if (outputArray[i] > outputArray[i + 1]) {
                var c = outputArray[i];
                outputArray[i] = outputArray[i + 1];
                outputArray[i + 1] = c;
                swapped = true;
            }
            i++;
        }
        if(!swapped)
            break;
    }
    console.log("After sort:",outputArray);
    return outputArray;

  } else {return false;}
}

/*
 8. Write a JavaScript program to find the most frequent item of an array.
 Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 Sample Output : a ( 5 times )
 */
function mostFrequent(array) {
  if (isArray(array)) {
    var i;
    var j;
    var len=array.length;
    var counter;
    var mostFreq=[0,0];

    for (i=0;i<len;i++) {
      counter=0;
      for (j=0;j<len;j++) {
        if (array[i]==array[j]) { counter++ }
      }
      if (counter>mostFreq[1])  { 
        mostFreq[0]=array[i];
        mostFreq[1]=counter; }
    }
    console.log("El :"+mostFreq[0]+" "+mostFreq[1]+" times")
    return mostFreq[0];
  } else {return false;}
}

/*
 9. Write a JavaScript program which accept a string as input and swap the case of each character.
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */
function swapLetter(string) {
  var outputString="";
  for (i=0; i<string.length;i++) {
    if (string[i] === string[i].toUpperCase()) {
      outputString+=string[i].toLowerCase();
    } else {outputString+=string[i].toUpperCase()}
  }
  console.log(outputString);
  return outputString;
}

/*
 10. Write a JavaScript program which prints the elements of the following array.
 Note : Use nested for loops.
 Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 Sample Output :
 "row 0"
 " 1"
 " 2"
 " 1"
 " 24"
 "row 1"
 ------
 ------
 */
function getNestedArray(array) {
  if (isArray(array)) {
    var parentLen = array.length;
    var i;
    var j;
    for (i=0;i<parentLen;i++){
      console.log("row "+i);
      childLen = array[i].length;
      if (childLen != undefined){
        for (j=0;j<childLen;j++){
          console.log(" ' "+array[i][j]+" ' ");
        }
      } else console.log(" ' "+array[i]+" ' ");
    }
  } else {return false;}
}

/*
 11. Write a JavaScript program to find the sum of squares of a numeric vector.
 */
function sumSquares(array) {
  if (isArray(array)) {
    var len = array.length;
    var i;
    var sum=0;
    for (i=0; i<len; i++) {
      sum+=(array[i]*array[i]);
    } 

    console.log(sum);
    return sum;
  } else {return false;}
}

/*
 12. Write a JavaScript program to compute the sum and product of an array of integers.
 */
function sumArrayInteger(array) {
 if (isArray(array)) {
    var len = array.length;
    var i;
    var sum=0;
    var prod=1;
    for (i=0; i<len; i++) {
      sum+=(array[i]);
      prod*=(array[i]);
    } 
    
    console.log("sum :",sum);
    console.log("prod :",prod)
    return (sum,prod);
  } else {return false;} 
}

/*
 13. Write a JavaScript program to add items in an blank array and display the items.
 Use arguments array to take all pass arguments in function and loop over them to push in array. 
 Then return array
 */
function addToArray(item, item1, item2) {
  var i;
  var outputArray=[];
  var len = arguments.length;
  for (i=0;i<len;i++) {
    outputArray[i]=arguments[i];
  }

  console.log("Result :",outputArray);
  return outputArray;
}

/*
 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
 */
function removeDuplicate(array) {
  if (isArray(array)) {
      var i=0;
      var j=0;
      var len = array.length;
      var outputArray=[];
      var duplication;
      var numberToStr1;
      var numberToStr2;

      array.forEach(function pereborParent(itemPr) {
        duplication=false;
        outputArray.forEach(function pereborChild(itemCh){
          // немного брутального перевода в строку
          numberToStr1="";
          numberToStr2="";
          numberToStr1+=itemPr;
          numberToStr2+=itemCh;
          if (numberToStr1.toUpperCase()==numberToStr2.toUpperCase()) {
            duplication=true;
          }
        });
        if (!duplication) {
          outputArray[i]=itemPr;
          i++;};
      });
      console.log("With duplication : ",array);
      console.log("Without duplication : ",outputArray);
      return outputArray;
  } return false;
}

/*
 15. We have the following arrays :
 color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 o = ["th","st","nd","rd"]
 Write a JavaScript program to display the colors in the following way :
 "1st choi
 ce is Blue ."
 "2nd choice is Green."
 "3rd choice is Red."
 - - - - - - - - - - - - -
 Note : Use ordinal numbers to tell their position.
 */
function displayColor(array) {
  if (isArray(array)) {
    var o=["th","st","nd","rd"];
    var len = array.length;
    var i=0;
    var j=0;
    var ending="";
    for (i=0;i<len;i++){
      j=i+1;
      switch (j) {
        case 1 : {ending=o[1]; break;}
        case 2 : {ending=o[2]; break;}
        case 3 : {ending=o[3]; break;}
        default : ending=o[0]; 
      }
      console.log(j+ending+" choice is "+array[i]);
    }
  } else { return false; }
}

/*
 16. Find the leap years in a given range of years.
 */
function leapYear(array) {
  if (isArray(array)) {
    var startingYear=array[0];
    var endingYear=array[1];  
    var i; 
    for (i=startingYear;i<endingYear;i++) {
      if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
        console.log(i+" is a leap year");
      }
    }
  }
}

/*
 17. Write a JavaScript program to shuffle an array.
 */
function shuffleArray(array) {
  if (isArray(array)) {
    var len = array.length;
    var outputArray = [];
    var i;
    var newPosition;
    var changed;

    for (i=0;i<len;i++) {
      changed=false;
      while (!changed) {
        newPosition = (Math.floor(Math.random()*(len))); // получаем рандомную позицию
        if (!outputArray[newPosition]) { // проверяем занята ли полученная позиция
          outputArray[newPosition]=array[i]; 
          changed=true;
        } // если занята - повторяем цикл
      }
    }
    console.log("INPUT ",array);
    console.log("OUTPUT ",outputArray);
    return outputArray;
  } else {return false;}
}

/*
 18. Write a JavaScript program to perform a binary search.
 Note : A binary search or half-interval search algorithm finds 
 the position of a specified input value within an array sorted by key value.
 Sample array :
 var items = [1, 2, 3, 4, 5, 7, 8, 9];
 Expected Output :
 console.log(binarySearch(items, 1)); //0
 console.log(binarySearch(items, 5)); //4
 */
function binarySearch(array, target) {
 if (isArray(array)) {
    var i = arguments[2];
    if (!i) i=0;
    var len = array.length;
    if ((array[i] != target)&&(i<len)) {
      i++;
      binarySearch(array,target,i);
    } else if (i==len){
      console.log("Elemnt not found");
      return false;
      } else {
        console.log(i);
        return i;};
 } else {return false;}
}

/*
 19. There are two arrays with individual values, write a JavaScript program 
 to compute the sum of each individual index value from the given arrays.
 Sample array :
 array1 = [1,0,2,3,4];
 array2 = [3,5,6,7,8,13];
 Expected Output :
 [4, 5, 8, 10, 12, 13]
 */
function sumOfInvidual(array1,array2) {
  if (isArray(array1)&&isArray(array2)) {
    var outputArray=[];
    var len;
    var i;
    var firstValue;
    var secondValue;
    if (array1.length>array2.length) {len=array1.length;}
      else len=array2.length;
    for (i=0;i<len;i++) {
      
      firstValue=0;
      if (array1[i]) firstValue=array1[i];
      
      secondValue=0;
      if (array2[i]) secondValue=array2[i];

      outputArray[i]=firstValue+secondValue;
    }
    console.log(outputArray);
    return outputArray;
  } else {return false;}
}

/*
 20. Write a JavaScript program to find duplicate values in a JavaScript array.
 */
function findDuplicate(array) {
  if (isArray(array)) {
    var outputArray=[];
    var temporaryArray=[];
    var len=array.length;
    var i=0;
    var j=0;
    var k=0;
    var duplication;

    for (i=0;i<len;i++) {
      duplication=0;
      for (j=0;j<len;j++) {
        if (array[i]==array[j]) {duplication++} 
      }
      if (duplication>1) {
        temporaryArray[k]=array[i];
        k++;
      }
    }
    outputArray=removeDuplicate(temporaryArray);

    console.log(outputArray);
    return outputArray;
  } else {return false;}
}

/*21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, 
the array will only be flattened a single level
 Sample Data :
 console.log(flattenNested([1, [2], [3, [[4]]],[5,6]]));
 [1, 2, 3, 4, 5, 6]
 console.log(flattenNested([1, [2], [3, [[4]]],[5,6]], true));
 [1, 2, 3, [[4]], 5, 6]
 */
function flattenNested(array) {
  // замкнутый счетчик (копипаст)
  function makeCounter() {
    function counter() {
      return counter.currentCount++;
    };
    counter.currentCount = 0;
    return counter;
  }
  var counter = makeCounter();

  var outputArray=[];

  // рекурсивный флаттер
  function flatDis(array) {
    if (isArray(array)) {
      array.forEach(function(item){
        flatDis(item);
      });
    } else { 
      outputArray[counter()]=array;};
  }
  flatDis(array);

  console.log(outputArray);
  return outputArray;
}

/*22. Write a JavaScript program to compute the union of two arrays.
 Sample Data :
 console.log(computeUnion([1, 2, 3], [100, 2, 1, 10]));
 [1, 2, 3, 10, 100]
 */
function computeUnion(array1, array2) {
  var outputArray=[];
  var temporaryArray=[];
  var i=0;
  if (isArray(array1)&&isArray(array2)) {
    array1.forEach(function(item){
      temporaryArray[i]=item;
      i++;
    });
    array2.forEach(function(item){
      temporaryArray[i]=item;
      i++;
    });
    outputArray=sort(removeDuplicate(temporaryArray));
    console.log("Result: ",outputArray);
    return outputArray;
  } else {console.log("incorrect input"); return false;}
}

/*23. Write a JavaScript function to find the difference of two arrays.
 Test Data :
 console.log(difference([1, 2, 3], [100, 2, 1, 10]));
 ["3", "10", "100"]
 console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
 ["6"]
 console.log(difference([1, 2, 3], [100, 2, 1, 10]));
 ["3", "10", "100"]
 */
function difference(array1, array2) {
  if (isArray(array1)&&isArray(array2)) {
    var firstArray = removeDuplicate(flattenNested(array1));
    var secondArray = removeDuplicate(flattenNested(array2));
    var outputArray=[];

    function justAdd(array1,array2){
      var i=0;
      var temporaryArray=[];
      array1.forEach(function(item){
        temporaryArray[i]=item;
        i++;
      });
      array2.forEach(function(item){
        temporaryArray[i]=item;
        i++;
      });
      return temporaryArray;
    }

    function deleteDuplicated(array){
      var outputArray=[];
      var i=0;
      array.forEach(function(itemParent){
        var duplication=0;
        array.forEach(function(itemChild){
          if (itemParent==itemChild) {
            duplication+=1;
          }
        });
        if (duplication==1) {
          outputArray[i]=itemParent;
          i++;
        }
      });
      return outputArray;
    };
    outputArray=sort(deleteDuplicated(justAdd(firstArray,secondArray)));

  } else { console.log('incorrect input'); return false;}

}

/*24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values 
from an array.
 Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
 Expected result : [15, -22, 47]
 */
function removeFalse(array) {
  if (isArray(array)) {
    var outputArray=[];
    var i=0;
    array.forEach(function(item){
      switch (Boolean(item)) {
        case false : {break;}
        case true : { 
          outputArray[i]=item;
          i++; 
          break;}
        default : {break;}
      }
    });
    console.log(outputArray);
    return outputArray;
  } else {console.log("incorrect input"); return false;}
}

/*25. Write a JavaScript function to sort the following array of objects by title value.

 Sample object :
 var library = [
 { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
 { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 ];

 Expected result :

 [[object Object] {
 author: "Suzanne Collins",
 libraryID: 3245,
 title: "Mockingjay: The Final Book of The Hunger Games"
 }, [object Object] {
 author: "Bill Gates",
 libraryID: 1254,
 title: "The Road Ahead"
 }, [object Object] {
 author: "Steve Jobs",
 libraryID: 4264,
 title: "Walter Isaacson"
 }]
 */
function sortByTitle(array) {
  var titles=[];
  var i=0;
  var sorted=[];
  var outputArray=[];
  array.forEach(function(item){
    titles[i]=item.title;
    i++;
  });

  sorted=(sort(titles));
  i=0;
  sorted.forEach(function(nextTitle){
    array.forEach(function(currentObject){
    if (currentObject.title==nextTitle){
      outputArray[i]=currentObject;
      i++;
    }
    });
  });
  console.log(outputArray);
  return outputArray;
}

/*26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

 Input: numbers= [10,20,10,40,50,60,70], target=50
 Output: 3, 4
 */
function pairOfEqualsSum(array, target) {

}

/*27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
 Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
 Expected result : [15, -22, 47]
 */
function retrieveValue(array) {

}

/*28. Write a JavaScript function to find the longest common starting substring in a set of strings.

 Sample array : ['go', 'google'];
 Expected result : "go"
 */
function longestSubstring(array) {

}
/*29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

 Test Data :
 console.log(suppliedBounds('a', "z", 2));
 ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
 */
function suppliedBounds(start, end, step) {

}

/*30. Write a JavaScript function to merge two arrays and removes all duplicates elements.

 Test data :
 var array1 = [1, 2, 3];
 var array2 = [2, 30, 1];
 console.log(merge(array1, array2));
 [3, 2, 30, 1]
 */
function merge(first, second) {

}

/*31. Write a JavaScript function to remove a specific element from an array.

 Test data :
 console.log(removeElement([2, 5, 9, 6], 5));
 [2, 9, 6]
 */
function removeElement(array, target) {

}

/*32. Write a JavaScript function to find, if an array contains a specific element.

 Test data :
 console.log(findElement([2, 5, 9, 6], 5));
 [2, 9, 6]
 */
function findElement(array, target) {

}

/*
 33. Write a JavaScript script to empty an array keeping the original.
 */
function keepOriginal(array) {

}

/*34. Write a JavaScript function to get nth largest element from an unsorted array.

 Test Data :
 console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
 89

 суть задачи: найти самый большой n элемент в массиве не СОРТИРУЯ его
 n - это индекс самого большого.
 из примера выше: если отсортируем массив то получим [23, 43, 56, 88, 89, 90, 99, 654] и число n = 89.
 если я ввиду target = 2 то должен получить число 99
 */
function nthLargest(array, target) {

}

/*
 35. Write a JavaScript function to get a random item from an array.
 */
function randomElement(array) {

}

/*36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

 Test Data :
 console.log(fillSpecifiedNumeric(6, 0));
 [0, 0, 0, 0, 0, 0]
 console.log(fillSpecifiedNumeric(4, 11));
 [11, 11, 11, 11]
 */
function fillSpecifiedNumeric(times, element) {

}

/*37. Write a JavaScript function to create a specified number of elements with pre-filled string value array.

 Test Data :
 console.log(fillSpecifiedString(3, 'default value'));
 ["default value", "default value", "default value"]
 console.log(fillSpecifiedString(4, 'password'));
 ["password", "password", "password", "password"]
 */
function fillSpecifiedString(times, element) {

}

/*38. Write a JavaScript function to move an array element from one position to another.

 Test Data :
 console.log(move([10, 20, 30, 40, 50], 0, 2));
 [20, 30, 10, 40, 50]
 console.log(move([10, 20, 30, 40, 50], -1, -2));
 [10, 20, 30, 50, 40]
 */
function move(array, target, to) {

}

/*
 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.
 Test Data :
 console.log(filter([58, '', 'abcd', true, null, false, 0]));
 [58, "abcd", true]
 */
function filter(array) {

}

/*40. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

 Test Data :
 console.log(arrayRange(1, 4));
 [1, 2, 3, 4]
 console.log(arrayRange(-6, 4));
 [-6, -5, -4, -3]
 */
function arrayRange(from, times) {

}

/* 41. Write a JavaScript function to generate an array between two integers of 1 step length.

 Test Data :
 console.log(rangeBetween(4, 7));
 [4, 5, 6, 7]
 console.log(rangeBetween(-4, 7));
 [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */
function rangeBetween(start, end) {

}

var ArraysTasks = {
  isArray              : isArray,
  cloneArray           : cloneArray,
  getFirstElements     : getFirstElements,
  getLastElements      : getLastElements,
  join                 : join,
  setDashes            : setDashes,
  sort                 : sort,
  mostFrequent         : mostFrequent,
  swapLetter           : swapLetter,
  getNestedArray       : getNestedArray,
  sumSquares           : sumSquares,
  sumArrayInteger      : sumArrayInteger,
  addToArray           : addToArray,
  removeDuplicate      : removeDuplicate,
  displayColor         : displayColor,
  leapYear             : leapYear,
  shuffleArray         : shuffleArray,
  binarySearch         : binarySearch,
  sumOfInvidual        : sumOfInvidual,
  findDuplicate        : findDuplicate,
  flattenNested        : flattenNested,
  computeUnion         : computeUnion,
  difference           : difference,
  removeFalse          : removeFalse,
  sortByTitle          : sortByTitle,
  pairOfEqualsSum      : pairOfEqualsSum,
  retrieveValue        : retrieveValue,
  longestSubstring     : longestSubstring,
  suppliedBounds       : suppliedBounds,
  merge                : merge,
  removeElement        : removeElement,
  findElement          : findElement,
  keepOriginal         : keepOriginal,
  nthLargest           : nthLargest,
  randomElement        : randomElement,
  fillSpecifiedNumeric : fillSpecifiedNumeric,
  fillSpecifiedString  : fillSpecifiedString,
  move                 : move,
  filter               : filter,
  arrayRange           : arrayRange,
  rangeBetween         : rangeBetween
}

module.exports = ArraysTasks;
