'use strict';

var smallYes = 'yes' || 'y';
var smallNo = 'no' || 'n';
var capYes = 'YES' || 'Y';
var capNo = 'NO' || 'N';

function questionName() {
  var name = prompt('Is my name Henry?');
  if (name.toLowerCase() === smallYes) {
    alert('Correctamundo');
  } else {
    alert('Please try again!');
    console.log(name);
  }
}

function questionColor() {
  var color = prompt('Do you think my favorite color is red?');
  if (color.toUpperCase() === capNo) {
    alert('Try Again!');
  } else {
    alert('Good Job!');
    console.log(color);
  }
}

function questionFood() {
  var food = prompt('Is my favorite food pizza?');
  if (food.toLowerCase() === smallYes) {
    alert('Give this person a slice!');
  } else {
    alert('No pizza for you!');
    console.log(food);
  }
}

function questionActivity() {
  var know = prompt('Do I look like I know what I\'m doing?');
  if (know.toUpperCase() === capYes) {
    alert('Well that\'s good!');
  } else {
    alert('well... ****');
    console.log(know);
  }
}

function questionDriving() {
  var driving = prompt('Do I like driving?');
  if (driving.toLowerCase() === smallNo) {
    alert('Sorry, try again!');
  } else {
    alert('WOOOOOOOOO');
    console.log(driving);
  }
}

var vacateTo = ['antigua','nyc','guatemala','italy'];
function questionVacation() {
  var vacate = prompt('Where have I gone in the world?');
  if(vacate.toLowerCase() === vacateTo[0]) {
    alert('nice! I\'ve also been to ' + vacateTo[1] + ', ' + vacateTo[2] + ', and ' + vacateTo[3] + '.');

  } if(vacate.toLowerCase() === vacateTo[1]) {
    alert('nice! I\'ve also been to ' + vacateTo[0] + ', ' + vacateTo[2] + ', and ' + vacateTo[3] + '.');

  } if(vacate.toLowerCase() === vacateTo[2]) {
    alert('nice! I\'ve also been to ' + vacateTo[0] + ', ' + vacateTo[1] + ', and ' + vacateTo[3] + '.');

  } if(vacate.toLowerCase() === vacateTo[3]) {
    alert('nice! I\'ve also been to ' + vacateTo[0] + ', ' + vacateTo[1] + ', and ' + vacateTo[2] + '.');

  } else {
    alert('No, but that sounds cool!');
    console.log(vacate + driving);
  }
}

//function calls
questionName();
questionColor();
questionFood();
questionActivity();
questionDriving();
questionVacation();
