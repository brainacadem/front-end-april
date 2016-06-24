function createCounter() {
     var numberOfCalls = 0;
     return function() {
        return ++numberOfCalls;
     }
}

var chooseSame = createCounter(),
    chooseAnother = createCounter();

for (var j = 0; j < 1000; j++) {
  var carDoor = Math.floor(Math.random() * 3),
    doors=[],
    playerChoice;
  console.log('%c Loop : '+j+' ','background: #222; color: #ffff55');
  console.log('Car is behind door :',carDoor);

  for (var i=0;i<=2;i++) {
    if (i==carDoor) { doors[i]='car'; } else { doors[i]='goat';};
  }

  playerChoice = Math.floor(Math.random() * 3);
  console.log('First choice :',playerChoice);
  if(doors[playerChoice]=='car') {chooseSame();console.log('You are lucky one!')}

  for (var i=0;i<=2;i++) {
    if ((i!=playerChoice)&&(doors[i]=='goat')) {doors[i]='opened goat'}
  }

  for (var i=0;i<=2;i++) {
    if ((i!=playerChoice)&&(doors[i]!='opened goat')) {
      playerChoice=i;
      console.log('Second choice :',playerChoice);
      if (doors[playerChoice] == 'car') {chooseAnother(); console.log('It was good idea to change!');}
      break;}
  }

}
console.log('Total same correct :'+(chooseSame()-1)+' / '+j);
console.log('Total another correct :'+(chooseAnother()-1)+' / '+j);
