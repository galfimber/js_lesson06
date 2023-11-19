"use strict";

const random = Math.ceil(Math.random() * 100);
let result;

function guess(random, attempts = 10) {
  function guess2() {
    if (attempts < 0) {
      result = confirm("Попытки закончились, хотите сыграть еще?");
      return result;
    }
    const answer = prompt("Угадай число от 1 до 100");
    if (answer === null) {
      console.log("Игра окончена");
      return;
    } else if (!isFinite(answer)) {
      console.log("Введи число!");
      guess2();
    } else {
      attempts--;
      switch (true) {
        case answer < random:
          console.log(`Загаданное число больше, осталось попыток ${attempts}`);
          guess2();
          break;
        case answer > random:
          console.log(`Загаданное число меньше, осталось попыток ${attempts}`);
          guess2();
          break;
        default:
          result = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          break;
      }
    }
  }

  guess2();
  return result;
}

console.log(random);
if (guess(random)) {
  guess(random);
} else {
  console.log("Игра окончена");
}
