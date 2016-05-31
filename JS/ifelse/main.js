// 1. What number's bigger?
function greaterNum(a, b) {
	if (a > b) {
		return a;
	} else { 
		return b;
	}
}

var greaterNumber = greaterNum(2, 20);
console.log(greaterNumber);

// 2. The World Translator
function helloWorld(languageCode) {
	if (languageCode == "es") {
		return "Hola Mundo";
	} else if (languageCode == "de") {
		return "Hallo Welt";
	} else {
		return "Hello World";
	}
}
var result = helloWorld("es");
console.log("es:" + result);
result = helloWorld("de");
console.log("de:" + result);
result = helloWorld();
console.log("en:" + result);

//3. The Grade Assigner
function assignGrade(numberScore) {
	if (numberScore <= 100 && numberScore >= 95 ) {
		return "A";
	} else if (numberScore <= 94 && numberScore >= 85) {
		return "B";
	} else if (numberScore <= 84 && numberScore >= 75) {
		return "С";
	} else if (numberScore <= 74 && numberScore >= 60) {
		return "D";
	} else if (numberScore <= 59 && numberScore >= 0) {
		return "F";
	}
}
var mark = assignGrade(82);
console.log("mark 82:" + mark);
mark = assignGrade(97);
console.log("mark 97:" + mark);
mark = assignGrade(64);
console.log("mark 64:" + mark);

// 4. The Pluralizer
function pluralize(noun, number) {
	var result = "" + number + " " + noun;
	if (number > 1) {
		return result + "s";
	} else 	{
		return result;
	}
}
var plural = pluralize("cat", 5);
console.log(plural);
plural = pluralize("cat", 1);
console.log(plural);

/* task 1 
var a = prompt("Введите число");
	if ( a == 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}

// task 2
var a = prompt("Введите число");
	if ( a > 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}
*/
/*
// task 3
var a = prompt("Введите число");
	if ( a < 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}

// task 4
var a = prompt("Введите число");
	if ( a > = 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}

// task 5
var a = prompt("Введите число");
	if ( a < = 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}

//task 6
var a = prompt("Введите число");
	if ( a != 0) {
		console.log( "Верно" );
	}	else {
		console.log( "Неверно" );
	}
*/
//task 7
var a = "test";
if ( a == "test") {
	console.log( "Верно" );
}	else {
	console.log( "Неверно" );
}

// task 8
var a = 1;
if ( a === 1) {
	console.log( "Верно" );
}	else {
	console.log( "Неверно" );
}

// task 9
var a = true;
if (a == true) {
	console.log( "Верно" );
}	else {
	console.log( "Неверно" );
}
// короткая запись
if (a) {
	console.log( "Верно" );
}	else if (!a) {
	console.log( "Неверно" );
}

// task 10
var test = true;
if (test != true) {
	console.log( "Верно" );
}	else {
	console.log( "Неверно" );
}
// короткая запись
if (!test) {
	console.log( "Верно" );
}	else if (test) {
	console.log( "Неверно" );
}

// task 11
var a = 3;
var b = 1;
var result = a + b;
if (result > 5) {
	result = 5;
}	else if (result < 5) {
	result = result * 10;
}
console.log(result);
/*
// task 12
var a = prompt("Введите число");
if (a > 0 && a < 5) {
	console.log("Верно");
} else {
	console.log("Неверно");
}
*/
// task 13
var a = prompt("Введите число");
if (a == 0 || a == 2) {
	a = a / 10;
} else {
	a = + a + 7;
}
console.log(a);
/*
// task 14
var a = prompt("Введите число");
if (a != 0 || a != 3) {
	console.log("Верно");
} else {
	console.log("Неверно");
}
*/
// task 15
var a = prompt("Введите число");
var b = prompt("Введите число");
if (a <= 1, b >= 3) {
	console.log(+a + +b);
} else {
	console.log("Неверно");
}

// task 16
var a = prompt("Введите число");
if (a > 0 && a < 5) {
	console.log(++a);
} else {
	console.log(a + 5);
}