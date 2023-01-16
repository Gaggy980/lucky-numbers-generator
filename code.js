const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");
const display4 = document.getElementById("display4");
const display5 = document.getElementById("display5");
const displayStars1 = document.getElementById("displayStars1");
const displayStars2 = document.getElementById("displayStars2");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  var i;
  var numbers = [];

  for (i = 0; i < 5; i++) {
    var number = Math.floor(Math.random() * 45) + 1;
    while (numbers.indexOf(number) !== -1) {
      number = Math.floor(Math.random() * 45) + 1;
    }
    numbers.push(number);
  }
  display1.innerText = numbers[0];
  display2.innerText = numbers[1];
  display3.innerText = numbers[2];
  display4.innerText = numbers[3];
  display5.innerText = numbers[4];
  console.log(numbers);
});

button.addEventListener("click", () => {
  var i;
  var numbers = [];

  for (i = 0; i < 2; i++) {
    var number = Math.floor(Math.random() * 9) + 1;
    while (numbers.indexOf(number) !== -1) {
      number = Math.floor(Math.random() * 9) + 1;
    }
    numbers.push(number);
  }
  displayStars1.innerText = numbers[0];
  displayStars2.innerText = numbers[1];
  console.log(numbers);
});
