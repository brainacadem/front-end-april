/*Listeners*/
var targetAdder = document.getElementsByName('inputbutton')[0];
targetAdder.addEventListener('click', adder);

/*Функция добавления данных в таблицу*/
function adder() {

    var arrInput = ['inputname', 'inputtel', 'inputemail'],
        arrInputValue = [];

    /*Создание массива значений*/
    for (let i = 0; i < 3; i++) {
        arrInputValue[i] = document.getElementsByName(arrInput[i])[0].value;
        console.log(arrInputValue[i]);
    }

    /*Обнуление value в input*/
    for (let i = 0; i < arrInput.length; i++) {
        document.getElementsByName(arrInput[i])[0].value = '';
    }

    /*Создание новой строки*/
    var newTr = document.createElement('tr');
    tbody.appendChild(newTr);

    var newTd;

    for (let i = 0; i < 3; i++) {
        newTd = document.createElement('td');
        newTr.appendChild(newTd);
        newTd.innerHTML = arrInputValue[i];
    }
}
