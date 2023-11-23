"use strict";

//const random = Math.ceil(Math.random() * 100);
let play = true;
let result = true;

function guess(attempts = 10) {
  const random = Math.ceil(Math.random() * 100);

  function guess2() {
    if (attempts < 1) {
      result = confirm("Попытки закончились, хотите сыграть еще?");
      return result;
    }
    const answer = prompt("Угадай число от 1 до 100");
    if (answer === null) {
      result = false;
      return;
    } else if (!isFinite(answer)) {
      alert("Введи число!");
      guess2();
    } else {
      attempts--;
      switch (true) {
        case answer < random:
          alert(`Загаданное число больше, осталось попыток ${attempts}`);
          guess2();
          break;
        case answer > random:
          alert(`Загаданное число меньше, осталось попыток ${attempts}`);
          guess2();
          break;
        default:
          result = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          break;
      }
    }
    if (result) {
      guess();
    }
  }

  console.log(random);
  guess2();
  //return result;
}

//console.log(random);
// if (guess(random)) {
//   guess(random);
// } else {
//   console.log("Игра окончена");
// }

// do {
//   const random = Math.ceil(Math.random() * 100);
//   console.log(random);
//   play = guess(random);
// } while (play === true);
// alert("Игра окончена");

guess();
alert("Игра окончена");
