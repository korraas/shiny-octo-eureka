
// Получаем кнопки по их идентификаторам (id)
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// Функция-обработчик события при нажатии на первую кнопку
btn1.addEventListener("click", function () {
  alert("Работает. Не трогай!");
});

// Массив с цитатами
var quotes = [
  "Цитата 1",
  "Цитата 2",
  "Цитата 3"
];

// Функция-обработчик события при нажатии на вторую кнопку
btn2.addEventListener("click", function () {
  // Выводим цитаты по очереди в сообщениях
  for (var i = 0; i < quotes.length; i++) {
    alert(quotes[i]);
  }
});

