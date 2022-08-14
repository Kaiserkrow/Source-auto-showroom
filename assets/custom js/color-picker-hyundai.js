//not the best code out there, but it works. Would refactor when there's time left
//should have used template literal
let allTucsonImg = document.getElementsByClassName("tucson-img");
let allTucsonCircle = document.getElementsByClassName("tucson-circle");
let allSantafeImg = document.getElementsByClassName("santafe-img");
let allSantafeCircle = document.getElementsByClassName("santafe-circle");
let allAccordImg = document.getElementsByClassName("accord-img");
let allAccordCircle = document.getElementsByClassName("accord-circle");
let allBrioImg = document.getElementsByClassName("brio-img");
let allBrioCircle = document.getElementsByClassName("brio-circle");

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
const brioColors = [
  "Phoenix Orange Pearl",
  "Carnival Yellow",
  "Taffeta White",
  "Modern Steel Metallic",
  "Rallye Red",
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
function accordColorPicker(value) {
  for (let i = 0; i < 3; i++) {
    if (value === i) {
      allAccordCircle[i].classList.add("btn-border");
      allAccordImg[i].classList.add("appear");
      document.getElementById(
        "accord-color-picker-text"
      ).innerHTML = `${accordColors[i]}`;
    } else {
      allAccordCircle[i].classList.remove("btn-border");
      allAccordImg[i].classList.remove("appear");
    }
  }
}

function brioColorPicker(value) {
  for (let i = 0; i < 5; i++) {
    if (value === i) {
      allBrioCircle[i].classList.add("btn-border");
      allBrioImg[i].classList.add("appear");
      document.getElementById(
        "brio-color-picker-text"
      ).innerHTML = `${brioColors[i]}`;
    } else {
      allBrioCircle[i].classList.remove("btn-border");
      allBrioImg[i].classList.remove("appear");
    }
  }
}
