// Складні
// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
// function divideArrIntoEvenNumAndOddNum(array) {
//   let evenNum = [];
//   let oddNum = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenNum.push(array[i]);
//     } else {
//       oddNum.push(array[i]);
//     }
//   }
//   return evenNum.concat(oddNum);
// }
// console.log(divideArrIntoEvenNumAndOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// function divideArrIntoEvenNumAndOddNum1(array) {
//   return [
//     ...array.filter((num) => num % 2 === 0), // Всі парні
//     ...array.filter((num) => num % 2 !== 0), // Всі непарні
//   ];
// }
// console.log(divideArrIntoEvenNumAndOddNum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// function divideArrIntoEvenNumAndOddNum2(array) {
//   let evenNum = [];
//   let oddNum = [];

//   array.forEach((num) =>
//     num % 2 === 0 ? evenNum.push(num) : oddNum.push(num)
//   );

//   return [...evenNum, ...oddNum]; // Spread-оператор для об'єднання масивів
// }
// console.log(divideArrIntoEvenNumAndOddNum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.

// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.

// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.

// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.
