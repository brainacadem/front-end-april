// Task 1

console.log('Task 1');

function task1(X, Y, Z, N) {
    console.log('You will be a ' + X + ' in ' + Y + ', and married to ' + Z + ' with ' + N + ' kids.');
}

task1('2200', 'Muckanaghederdauhaulia', 'Karen', '71');

// Task 2

console.log('Task 2');

function task2(currentMonth, currentYear, birthMonth, birthYear) {
    var age;
    if (currentMonth > birthMonth) {
      age = currentYear - birthYear - 1;
    } else {
      age =  currentYear - birthYear;
    }
    console.log('You age ' + age + ' years.');

}

task2('5', '2016', '6', '1987');

task2('7', '2016', '6', '1987');

// Task 3

console.log('Task 3');

function task3(age) {

            console.log('Error');
}

assignGrade('5');

// Task 4

console.log('Task 4');

function pluralize(noun, number) {
    if ((number > 0) && (number != 1) && (noun != 'cats') && (noun != 'dogs')) {
        console.log(+number + ' ' + noun + 's');
    } else if ((number > 0) && (number == 1) && (noun != 'cats') && (noun != 'dogs')) {
        console.log(+number + ' ' + noun);
    } else if ((number > 0) && (number == 1) && (noun == 'cats')) {
        console.log(+number + ' cat');
    } else if ((number > 0) && (number == 1) && (noun == 'dogs')) {
        console.log(+number + ' dog');
    } else {
        console.log('Error');
    }
}
pluralize('cat', 5);
pluralize('cats', 1);
pluralize('dogs', 0);
pluralize('dog', 666);

// Task 5

console.log('Task 5');

function task5(a) {
    var output = (a === 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task5(1);
task5(0);
task5(-3);
