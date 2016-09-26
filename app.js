'use strict';

function questionName() {
  var name = prompt('Is my name Henry?');
  if (name.toLowerCase() === 'y') {
    alert('Correctamundo');
  } else {
    alert('Please try again!');
    console.log(name);
  }
}

function questionColor() {
  var color = prompt('Do you think my favorite color is red?');
  if (color.toUpperCase() === 'N') {
    alert('Try Again!');
  } else {
    alert('Good Job!');
    console.log(color);
  }
}

function questionFood() {
  var food = prompt('Is my favorite food pizza?');
  if (food.toLowerCase() === 'y') {
    alert('Give this person a slice!');
  } else {
    alert('No pizza for you!');
    console.log(food);
  }
}

function questionKnow() {
  var know = prompt('Do I look like I know what I\'m doing?');
  if (know.toUpperCase() === 'Y') {
    alert('Well that\'s good!');
  } else {
    alert('well... ****');
    console.log(know);
  }
}

function questionDriving() {
  var driving = prompt('Do I like driving?');
  if (driving.toUpperCase() === 'Y') {
    alert('Sorry, try again!');
  } else {
    alert('WOOOOOOOOO');
    console.log(driving);
  }
}

//function calls
questionName();
questionColor();
questionFood();
questionKnow();
questionDriving();
