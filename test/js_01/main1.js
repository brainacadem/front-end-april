// Candy weighs X grams, tangerine - Y grams and apple - Z grams.
// Need to write a program that will determine how many different 
// versions of gifts weighing exactly W grams can make Santa Claus.

// Input data
// Function should receive four integers X, Y, Z and W.

// Output data
// Function should return a single integer - the number of gift options.

// Example: 

// X = 10
// Y = 20
// Z = 15
// W = 40
// Result: 3


// 4*X , Y+Z, 2*Z + X 

// weight = x + y + z

function isRound(value, result) {
    return (result % value == 0) ? 1 : 0;
}

function isSumRound(value, result) {
    return function rec(sumValue, step) {
    	var sum = sumValue + value
        if (result < sum) {
            return 0
        }

        if ( result == sum) {
        	return 1;
        }

        return rec(sumValue + step, step);
    }
}

isSumRound(10, 40)()

function calculcateGifts(x, y, z, weight) {
    var values = Array.prototype.slice.call(arguments, ',').splice(0, 3);

    counter1 = values.map(function(val) {
        var recursion = isSumRound(val, weight)
        var result;
        values.forEach(function(el) {
        	console.log("second stes : ", el)
            result = recursion(el, el)
            console.log("after all recursion : ", result)
        })
        return result;
    }).reduce(function(sum , curr) {
    	return sum + curr
    }, 0)

    console.log(counter1)
}

calculcateGifts(10, 25, 15, 40)
