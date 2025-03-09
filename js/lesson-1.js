// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

let number = prompt('Enter a number');
if (Number(number) === 10) {
    alert("Вірно");
}
else {
    alert("Невірно");
}

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0); = Math.floor(Math.random() * 60);???

const min = Math.floor(Math.random() * (59 - 0) + 0);
function defineHoursPart(min) {
    if (min > 0 && min <= 15) {
        alert(`${min} входить в першу чверть`);
    }
    else if (min > 15 && min <= 30) {
        alert(`${min} входить в другу чверть`);
    }
    else if (min > 30 && min <= 45) {
        alert(`${min} входить в третю чверть`);
    }
    else {
        alert(`${min} входить в четверту чверть`);
    }
}
console.log(defineHoursPart(min));

console.log(defineHoursPart(min));
defineHoursPart(Math.floor(Math.random() * (59 - 0) + 0));


// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

let num = prompt(`Введіть цифру від 1 до 4 включно.`);
let result;
switch (num) {
    case "1":
        result = "зима";
        break;
    case "2":
        result = "весна";
        break;
    case "3":
        result = "літо";
        break;
    case "4":
        result = "осінь";
        break;
    default:
        result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}
alert(result);
console.log(result);
 
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// String(hours).padStart(2(кількість символів в рядку), "0"(на що зіміняємо ті символи, які не вистачають))
// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
// console.log(maskedNumber);   Expected output: "************5581" 

let minutesInput = prompt(`Введіть кількість хвилин`);
let hours = Math.floor(minutesInput / 60);
let minutes = minutesInput % 60;
alert(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
console.log (`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

let login = prompt(`Input your login`);
console.log(login);
login = login.toLowerCase().trim();    // переводить введене значення в нижній регістр і видаляє пробіли ДОДАТКОВО
if (login === null || login === "") {
    alert(`Canceled`);
} else if (login === "admin") { 
    let password = prompt(`Input your password`);
    if (password === "Boss") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }    
} else {
    alert ("I don't know you");
}

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
 
let sumPairNum = 0;
function getNumbers(min, max) {
    while (max >= min) {
        console.log(max);
        max--;
        if (max % 2) {
            sumPairNum += max;
        }
    }
    return sumPairNum;
}
console.log(getNumbers(15, 37));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) { 
    if (typeof a === "number" && typeof b === "number") {
        return Math.min(a, b);
    } else {
        return "Not a number!";
    }
}

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

let age = prompt(`How old are you?`);
function isAdult(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Are you sure?");
    }
}
console.log(isAdult());

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) { 
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
    }    
}