
let season = prompt("Введите название времени года (Зима, Весна, Лето, Осень):");

let destination;

switch (season) {
  case "Зима":
    destination = "Антарктида";
    break;
  case "Весна":
    destination = "Испания";
    break;
  case "Лето":
    destination = "Мальдивы";
    break;
  case "Осень":
    destination = "Ирландия";
    break;
  default:
    destination = "Неизвестная пора";
    break;
}

console.log(`Вы попадёте в ${destination}!`);

