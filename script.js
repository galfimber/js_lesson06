"use strict";

const random = Math.ceil(Math.random() * 100);

function guess(random) {
  function guess2() {
    const answer = prompt("Угадай число от 1 до 100");
    if (answer === null) {
      console.log("Игра окончена");
      return;
    } else if (!isFinite(answer)) {
      console.log("Введи число!");
      guess2();
    } else {
      switch (true) {
        case answer < random:
          console.log("Загаданное число больше");
          guess2();
          break;
        case answer > random:
          console.log("Загаданное число меньше");
          guess2();
          break;
        default:
          console.log("Поздравляю, Вы угадали!!!");
          break;
      }
    }
  }

  guess2();
}

console.log(random);
guess(random);
