// // Складні
// // Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
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
// function getArrayOfSum(array) {
//   let sumArr = [];
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//     sumArr.push(total);
//   }
//   return sumArr;
// }
// console.log(getArrayOfSum([1, 2, 23, 345, 5, 6, 53457, 833, 9, 10]));
// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
function getUniqueArray(array) {
  let uniqueCollection = [];
  for (let item of array) {
    if (!uniqueCollection.includes(item)) {
      uniqueCollection.push(item);
    }
  }
  return uniqueCollection;
}
// console.log(getUniqueArray([1, 2, 23, 2, 3, 2, 8, 345, 5]));
// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
// function getUniqueArray(arr1, arr2) {
//   let uniqueCollection = [];
//   let unitedArrays = arr1.concat(arr2);
//   for (let item of unitedArrays) {
//     if (!uniqueCollection.includes(item)) {
//       uniqueCollection.push(item);
//     }
//   }
//   return uniqueCollection;
// }
// console.log(
//   getUniqueArray([1, 2, 23, 2, 3, 2, 8, 345, 5], [3, 2, 8, 90, 70, 345, 5])
// );

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.
// function getSumOfThreeNumb(arr) {
//   let newArrWithSum = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i === 0) {
//       newArrWithSum.push(((arr[i] + arr[i + 1]) / 2).toFixed(1));
//     } else if (i === arr.length - 1) {
//       newArrWithSum.push(((arr[i - 1] + arr[i]) / 2).toFixed(1));
//     } else {
//       newArrWithSum.push(((arr[i - 1] + arr[i] + arr[i + 1]) / 3).toFixed(1));
//     }
//   }
//   return newArrWithSum;
// }
// console.log(getSumOfThreeNumb([1, 2, 23, 2, 3, 2, 8, 345, 5]));

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.
// function getSortedMinMax(arr) {
//   let uniqArr = getUniqueArray(arr);
//   let minToMax = uniqArr.toSorted((a, b) => a - b);
//   let maxToMin = uniqArr.toSorted((a, b) => b - a);
//   return {
//     fromMin: `Start from min:${minToMax}`,
//     fromMax: `Start from max:${maxToMin}`,
//   };
// }
// console.log(getSortedMinMax([1, 2, 23, 2, 3, 2, 8, 345, 5]));
// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.
// function getSortedByAlphabet(arr) {
//   let sortedArrFromAtoB = arr.toSorted((a, b) => a.localeCompare(b));
//   let sortedArrFromBtoA = arr.toSorted((a, b) => b.localeCompare(a));
//   return {
//     fromAtoB: `Start from min:${sortedArrFromAtoB}`,
//     fromBtoA: `Start from max:${sortedArrFromBtoA}`,
//   };
// }
// console.log(
//   getSortedByAlphabet([
//     "довжиною",
//     "повертає",
//     "приймає",
//     "новий",
//     "елементів",
//     "функцію",
//   ])
// );
//====================4-1===============================
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// function createNewArr(key, value) {
//   let newObj = { [key]: value };
//   return newObj;
// }
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
function addNewPropToArr(obj, address) {
  obj[address] = address; // can use: obj.address
  return obj;
}
//Цей варіант створює новий обʼєкт, не змінюючи початковий! use: "...obj"
function addAddress(obj, address) {
  return { ...obj, address };
}
//=============================================
// Створити об'єкт bankAccount:

// Властивості:
// balance (поточний баланс)
// Методи:
// deposit(amount) - метод, що приймає суму та додає її до балансу.
// withdraw(amount) - метод, що приймає суму та знімає її з балансу (з перевіркою на достатність коштів).
// checkBalance() - метод, що повертає поточний баланс.

// let bankAccount = {
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Your balance: ${this.balance}`);
//   },
//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log(
//         `Your balance is not enough. Current balance: ${this.balance}`
//       );
//     } else {
//       this.balance -= amount;
//       console.log(`Withdraw successful. New balance: ${this.balance}`);
//     }
//   },
//   checkBalance() {
//     console.log(`Your balance: ${this.balance}`);
//   },
// };
// bankAccount.deposit(100); // Your balance: 100
// bankAccount.withdraw(30); // Withdraw successful. New balance: 70
// bankAccount.checkBalance(); // Your balance: 70
// bankAccount.withdraw(100); // Your balance is not enough. Current balance: 70
//===========================================
// Створити об'єкт myString:

// Методи:
// reverse(str) - метод, що приймає рядок та повертає його в перевернутому вигляді.
// ucFirst(str) - метод, що приймає рядок та повертає цей же рядок, зробивши його першу літеру заголовною.
// ucWords(str) - метод, що приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

let myString = {
  string: "",
  reverse(str) {
    this.string = str;
    console.log(this.string.split("").reverse().join(""));
  },
  ucWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i += 1) {
      let word = words[i];
      let capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    }

    this.string = result.join(" ");
    return this.string;
  },
  ucFirst(str) {
    this.string = str[0].toUpperCase() + str.slice(1);
    return this.string;
  },
};
console.log("Reverse:");
myString.reverse("helloe world!");

console.log("First letter capitalized:");
console.log(myString.ucFirst("helloe world!"));

console.log("Each word capitalized:");
console.log(myString.ucWords("helloe world!"));

console.log("Final string:", myString.string);
