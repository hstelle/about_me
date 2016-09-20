"use strict"

var name = prompt('Is my name Henry?');
  if(name.toLowerCase() == 'yes'){
    alert('Correctamundo');
  }
  else{
    alert('Please try again!');
  }
  console.log(name);

var color = prompt('Do you think my favorite color is red?');
    if(color.toUpperCase() == 'NO'){
      alert('Try Again!');
    }
    else{
      alert('Good Job!');
    }
  console.log(color);

var food = prompt('Is my favorite food pizza?');
    if(food.toLowerCase() === 'yes'){
      alert('Give this person a slice!');
    }
    else{
      alert('No pizza for you!');
    }
console.log(food);

var know = prompt("Do I look like I know what I'm doing?");
  if(know.toUpperCase() == 'YES'){
      alert("Well that's good!");
    }
  else{
      alert('well... ****');
    }
console.log(know);

var driving = prompt('Do I like driving');
  if(driving.toUpperCase() == 'YES'){
    alert('Have a good day!');
  }
  else{
    alert('Get out of the left lane!');
  }
  console.log(driving);
