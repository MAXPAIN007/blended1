// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector("body");
console.log(`Task-1: ${bodyElem.tagName.toLowerCase()}`);

// 2 - отримай елемент id="title" і виведи його в консоль;
const elemById = document.querySelector("#title");
console.log(`Task-2: ${elemById.tagName.toLowerCase()}`);

// 3 - отримай елемент class="list" і виведи його в консоль;
const elemByClass = document.querySelector(".list");
console.log(`Task-3:`, elemByClass);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allElemByAtr = document.querySelectorAll("[data-topic]");
console.table(`Task-4:`, allElemByAtr);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const elemByAtr = document.querySelector("[data-topic]");
console.log("Task-5:", elemByAtr);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElem = [...allElemByAtr].at(-1);
console.log("Task-5:", lastElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log("Task-6:", document.querySelector("h1").nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allH3Titles = document.querySelectorAll("h3");
console.log(
  "Task-7:",
  [...allH3Titles]
    .map((e) => {
      return e.textContent;
    })
    .join("\n")
);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
function addClass(elements) {
  elements.forEach((el) => {
    el.classList.add("active");
    el.style.color = "red"; // або в сіесес додати клас зі стилями
  });
}
addClass(allH3Titles);
console.log("Task-9: Added class with red color");

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const elemByAtrPlusValue = document.querySelector("[data-topic='navigation']");
console.log("Task-10:", elemByAtrPlusValue);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
elemByAtrPlusValue.setAttribute("style", "background-color: yellow;"); //не пітримує кемел кейс
elemByAtrPlusValue.style.backgroundColor = "yellow";
console.log("Task-11: Added atr backgroundColor with value yellow for elem");

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const elemP = (document.querySelector(
  "[data-topic='navigation']>p"
).textContent = "Я змінив тут текст!");

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const elemByAtrData = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(elemByAtrData);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
elemByAtrData.setAttribute("style", "background-color:blue;");

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleByClass = document.querySelector(".completed");
console.log(titleByClass);

function getCompletedHeading() {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return [...headings].find((el) => el.classList.contains("completed"));
}
console.log(getCompletedHeading());

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const delLiElemWithHAndClass = document.querySelectorAll("li").forEach((li) => {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  for (const tag of headings) {
    const headingElem = li.querySelector(`${tag}.completed`);
    if (headingElem) {
      li.remove();
      console.log("Task-16: li elem is deleted");
      break;
    }
  }
});

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
document.querySelector("h1").after(
  Object.assign(document.createElement("p"), {
    textContent: "Об'єктна модель документа (Document Object Model)",
  })
);
console.log("Task-17:", document.querySelector("p"));

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати
// рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити
// елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const refs = {
  list: document.querySelector("ul"),
  item: document.createElement("li"),
  title: document.createElement("h3"),
  text: document.createElement("p"),
};
refs.list.append(refs.item);
refs.item.append(refs.title);
refs.title.textContent = "Властивість innerHTML";
refs.item.append(refs.text);
refs.text.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// refs.item.innerHTML = `
//   <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// `;

// refs.list.append(refs.item);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
refs.item.insertAdjacentHTML(
  "beforeend",
  `
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  `
);
refs.list.append(refs.item);

// 20 - очисти список
// refs.list.innerHTML = "";
// refs.list.replaceChildren();

//============================================================task2============================================================
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
const divElem = document.querySelector(".numberContainer");
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  const div = document.createElement("div");
  div.classList.add("number");

  const random = Math.floor(Math.random() * 100) + 1;
  div.textContent = random;

  if (random % 2 !== 0) {
    div.classList.add("odd");
  } else {
    div.classList.add("even");
  }

  fragment.append(div);
}
console.log(fragment);
divElem.append(fragment);
divElem.style.display = "flex";
divElem.style.flexWrap = "wrap";

//============================================================task3============================================================
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const inputElem = document.querySelector(".js-username-input");
// inputElem.addEventListener("input", (e) => {
//   const inputLength = e.target.value.length;
//   if (inputLength >= 6) {
//     inputElem.classList.add("success");
//     inputElem.classList.remove("error");
//   } else {
//     inputElem.classList.add("error");
//     inputElem.classList.remove("success");
//   }
// });
// __________________________________________________
function checkInput(e) {
  const inputLength = e.target.value.length;

  e.target.style.outline =
    inputLength === 0 ? "3px solid red" : "3px solid lime";
}

// inputElem.addEventListener("focus", checkInput);
// inputElem.addEventListener("input", checkInput);
// inputElem.addEventListener("blur", (e) => {
//   const inputValue = e.target.value.trim();
//   inputValue === ""
//     ? (inputElem.style.outline = "3px solid red")
//     : (inputElem.style.outline = "3px solid lime");
// });

const formElem = document.querySelector(".js-contact-form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.currentTarget.elements.accept.checked);
  const inputValue = e.currentTarget.elements.userName.value.trim();
  const checkbox = e.currentTarget.elements.accept.checked;
  if (!inputValue || !checkbox) {
    return alert("Error!");
  }
  const data = { userName: inputValue };
  console.log(data);
  e.currentTarget.reset();
});
