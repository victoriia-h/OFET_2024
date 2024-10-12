// Завдання 1 //

document.addEventListener("DOMContentLoaded", function () {
    let n = 40;
    let index = (n % 10) + 1;

    // Елемент, що обирається за допомогою getElementById()
    let firstElement = document.getElementById(`item-${index}`);
    if (firstElement) {
        firstElement.addEventListener("click", function () {
            toggleColors(firstElement);
        });
    }

    // Елемент, що обирається за допомогою querySelector()
    let secondElement = document.querySelector(`#item-${index + 1}`);
    if (secondElement) {
        secondElement.addEventListener("click", function () {
            toggleColors(secondElement);
        });
    }

    // Функція зміни кольорів
    function toggleColors(element) {
        let currentColor = element.style.backgroundColor;
        if (currentColor === "rgb(64, 143, 143)") {
            element.style.backgroundColor = "white";
            element.style.color = "black";
        } else {
            element.style.backgroundColor = "#408f8f";
            element.style.color = "#f5f540";
        }
    }


    // Завдання 2 //

    // Функції для кнопок
    const imageElement = document.getElementById("kyivImage");
    let imageAdded = false;

    document.getElementById("addButton").addEventListener("click", function () {
        if (!imageAdded) { // Перевірка, чи зображення ще не додано
            const newImage = document.createElement("img");
            newImage.src = "../lab1/kyiv.png";
            newImage.alt = "New Image";
            newImage.width = 1000;
            document.body.appendChild(newImage);
            imageAdded = true;
        } else {
            alert("Зображення вже додано!");
        }
    });

    document.getElementById("increaseButton").addEventListener("click", function () {
        const images = document.querySelectorAll("img");
        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            const currentWidth = lastImage.width;
            lastImage.width = currentWidth * 1.2; // Збільшуємо розмір на 20%
        }
    });

    document.getElementById("decreaseButton").addEventListener("click", function () {
        const images = document.querySelectorAll("img");
        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            const currentWidth = lastImage.width;
            lastImage.width = currentWidth * 0.8; // Зменшуємо розмір на 20%
        }
    });

    document.getElementById("removeButton").addEventListener("click", function () {
        const images = document.querySelectorAll("img");
        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            lastImage.remove();
            imageAdded = false;
        }
    });
});
