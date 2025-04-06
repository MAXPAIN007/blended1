// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// for (let i = 0; i <= styles.length; i += 1) {
//   if (styles[i] === "blues") {
//     styles[i] = "classic";
//   }
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 1; i < array.length; i += 1) {
//     console.log(`${i} - ${array[i]}`);
//   }
// }
// logItems(styles);
//===================================================2===============================================================================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   let name = prompt("Enter your name:");
//   //   let lowerCaseArr = [];
//   //   for (let item of array) {
//   //     lowerCaseArr.push(item.toLowerCase);
//   //     }
//   const lowerCaseArray = array.map((item) => item.toLowerCase());
//   array.includes(name.toLowerCase)
//     ? alert(`Welcome, ${name}!`)
//     : alert(`User not found`);

//   //   if (array.indexOf(name) !== -1) {
//   //     return alert(`Welcome, ${name}!`);
//   //   } else {
//   //     return alert(`User not found`);
//   //   }
// }
// checkLogin(logins);
//=================================================3=================================================================================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   if (args.every((numb) => typeof numb === "number")) {
//     let sum = args.reduce((acc, numb) => acc + numb);
//     console.log(`Array average:`, sum / args.length);
//   } else {
//     return "Elements aren`t a Number!";
//   }
// }
//=================================================4=================================================================================
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// function getSumPairNum(args) {
//   if (!args.every((numb) => typeof numb === "number")) {
//     return "Elements aren`t a Number!";
//   }
//   let sum = [];
//   for (let i = 0; i < args.length - 1; i += 1) {
//     const result = args[i] + args[i + 1];
//     console.log(`${args[i]} + ${args[i + 1]} = ${result}`);
//     sum.push(result);
//   }
//   console.log(sum);
// }
// getSumPairNum(someArr);

//===============================================5===================================================================================
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   Array.isArray(numbers)
//     ? console.log(Math.min(...numbers))
//     : console.log("Sory, it is not an array!");
// }
// findSmallestNumber(numbers);
//===============================================6===================================================================================
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   let newString = string.split(" ");
//   let biggerOne = "";
//   for (let i = 0; i < newString.length; i += 1) {
//     biggerOne =
//       newString[i].length > biggerOne.length ? newString[i] : biggerOne;
//   }
//   return biggerOne;
// }
//===============================================7===================================================================================
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// let keys = Object.keys(user);

// for (let key of keys) {
//   console.log(key, ":", user[key]);
// }
//===============================================8===================================================================================
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const sum = (obj) => {
//   const value = Object.values(obj);
//   if (value.length === 0) {
//     return 0;
//   }
//   return value.reduce((arr, number) => arr + number, 0);
// };

// console.log(sum(salaries));
//===============================================9===================================================================================
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  reset() {
    delete this.a;
    delete this.b;
  },
  exist(fallback, fn) {
    let ex = "a" in this && "b" in this;
    return ex === true ? fn() : fallback;
  },
  sum() {
    return this.exist("No such properties", () => this.a + this.b);
  },
  mult() {
    return this.exist("No such properties", () => this.a * this.b);
  },
};
//===============================================10===================================================================================
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;

  for (let item of fruits) {
    if (item.name === fruitName) {
      totalPrice += item.price * item.quantity;
    }
  }

  return totalPrice;
  //   let result = [];
  //   for (let item of fruits) {
  //     let exist = result.find((it) => it.name === fruits.name);
  //       if (exist) {
  //           result.price += fruits.price;
  //           result.quantity += fruits.quantity;
  //       } else {
  //           result.push({...item});
  //     }
  //   }
}
console.log(calcTotalPrice(fruits, "Банан"));
