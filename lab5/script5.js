// Завдання 1 //

function validateForm() {
    // Отримання елементів форми
    const name = document.getElementById("name");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const email = document.getElementById("email");

    // Скидання стилів помилок
    name.classList.remove("error", "valid");
    group.classList.remove("error", "valid");
    phone.classList.remove("error", "valid");
    address.classList.remove("error", "valid");
    email.classList.remove("error", "valid");

    // Регулярні вирази для перевірки
    const namePattern = /^[А-ЯҐЄІЇа-яґєії]{2,}\s[А-ЯҐЄІЇа-яґєії]{1}\.[А-ЯҐЄІЇа-яґєії]{1}\.$/;
    const groupPattern = /^[А-ЯҐЄІЇа-яґєії]{2}-\d{2}$/;
    const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const addressPattern = /^м\.\s[А-ЯҐЄІЇа-яґєії]{2,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Перевірка, чи всі поля порожні
    if (!name.value && !group.value && !phone.value && !address.value && !email.value) {
        alert("Ви нічого не ввели!");
        return; // Припиняє виконання функції, якщо всі поля порожні
    }

    // Валідація
    let valid = true;

    if (!namePattern.test(name.value)) {
        name.classList.add("error");
        valid = false;
    } else {
        name.classList.add("valid"); // Додаємо клас для правильного введення
    }

    if (!groupPattern.test(group.value)) {
        group.classList.add("error");
        valid = false;
    } else {
        group.classList.add("valid"); // Додаємо клас для правильного введення
    }

    if (!phonePattern.test(phone.value)) {
        phone.classList.add("error");
        valid = false;
    } else {
        phone.classList.add("valid"); // Додаємо клас для правильного введення
    }

    if (!addressPattern.test(address.value)) {
        address.classList.add("error");
        valid = false;
    } else {
        address.classList.add("valid"); // Додаємо клас для правильного введення
    }

    if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        valid = false;
    } else {
        email.classList.add("valid"); // Додаємо клас для правильного введення
    }

    // Якщо всі поля валідні
    if (valid) {
        const result = `Ваші дані: \n\nПІБ: ${name.value}\nГрупа: ${group.value}\nТелефон: ${phone.value}\nАдреса: ${address.value}\nПошта: ${email.value}`;
        alert(result);
    } else {
        alert("Щось пішло не так... \n\nМожливі помилки: \n1. Помилка була зроблена при введені даних. \n2. Ви заповнили не усі поля.");
    }
}


// Завдання 2 //

// Створення таблиці 6х6
function createTable() {
    const table = document.getElementById("myTable");
    let counter = 1;

    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 6; col++) {
            const td = document.createElement("td");
            td.textContent = counter;
            td.dataset.number = counter; // Зберігаємо номер клітинки
            td.addEventListener("mouseover", handleMouseOver);
            td.addEventListener("click", handleClick);
            td.addEventListener("dblclick", handleDoubleClick);
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
}

// Створюємо таблицю після завантаження сторінки
window.onload = createTable;

// Обробник для зміни кольору на випадковий при наведенні
function handleMouseOver(event) {
    const cellNumber = parseInt(event.target.dataset.number);

    if (cellNumber === 4) { // Перевірка на номер варіанту
        const randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
    }
}

// Генерація випадкового кольору
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Обробник для зміни кольору на вибраний з палітри
function handleClick(event) {
    const colorPicker = document.getElementById("colorPicker");
    const selectedColor = colorPicker.value;
    event.target.style.backgroundColor = selectedColor;
}

// Обробник для зміни кольору клітинок через одну в рядку
function handleDoubleClick(event) {
    const cell = event.target;
    const row = cell.parentNode;
    const startIndex = Array.from(row.children).indexOf(cell);

    for (let i = startIndex; i < row.children.length; i += 2) {
        row.children[i].style.backgroundColor = getRandomColor();
    }
}


