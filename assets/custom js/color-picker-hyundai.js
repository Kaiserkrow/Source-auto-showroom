//not the best code out there, but it works. Would refactor when there's time left
//should have used template literal
let allTucsonImg = document.getElementsByClassName("tucson-img");
let allTucsonCircle = document.getElementsByClassName("tucson-circle");
let allSantafeImg = document.getElementsByClassName("santafe-img");
let allSantafeCircle = document.getElementsByClassName("santafe-circle");
let allCretaImg = document.getElementsByClassName("creta-img");
let allCretaCircle = document.getElementsByClassName("creta-circle");

const tucsonColors = [
  "Amazon Gray",
  "Phantom Black",
  "White Cream",
  "Deep Sea",
  "Shimmering Silver",
  "Crimson Red",
];
const santafeColors = [
  "Glacier White",
  "Taiga Brown",
  "Abyss Black",
  "Lagoon Blue",
];
const cretaColors = [
  "Dragon Red",
  "Midnight Black",
  "Metallic Silver",
  "Creamy White",
];
function tucsonColorPicker(value) {
  for (let i = 0; i < 6; i++) {
    if (value === i) {
      allTucsonCircle[i].classList.add("btn-border");
      allTucsonImg[i].classList.add("appear");
      document.getElementById(
        "tucson-color-picker-text"
      ).innerHTML = `${tucsonColors[i]}`;
    } else {
      allTucsonCircle[i].classList.remove("btn-border");
      allTucsonImg[i].classList.remove("appear");
    }
  }
}
function santafeColorPicker(value) {
  for (let i = 0; i < 4; i++) {
    if (value === i) {
      allSantafeCircle[i].classList.add("btn-border");
      allSantafeImg[i].classList.add("appear");
      document.getElementById(
        "santafe-color-picker-text"
      ).innerHTML = `${santafeColors[i]}`;
    } else {
      allSantafeCircle[i].classList.remove("btn-border");
      allSantafeImg[i].classList.remove("appear");
    }
  }
}
function cretaColorPicker(value) {
  for (let i = 0; i < 4; i++) {
    if (value === i) {
      allCretaCircle[i].classList.add("btn-border");
      allCretaImg[i].classList.add("appear");
      document.getElementById(
        "creta-color-picker-text"
      ).innerHTML = `${cretaColors[i]}`;
    } else {
      allCretaCircle[i].classList.remove("btn-border");
      allCretaImg[i].classList.remove("appear");
    }
  }
}
