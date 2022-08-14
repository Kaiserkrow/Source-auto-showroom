//not the best code out there, but it works. Would refactor when there's time left

let allCivicImg = document.getElementsByClassName("civic-img");
let allCivicCircle = document.getElementsByClassName("civic-circle");
let allInnovaImg = document.getElementsByClassName("innova-img");
let allInnovaCircle = document.getElementsByClassName("innova-circle");
let allViosImg = document.getElementsByClassName("vios-img");
let allViosCircle = document.getElementsByClassName("vios-circle");
let allSupraImg = document.getElementsByClassName("supra-img");
let allSupraCircle = document.getElementsByClassName("supra-circle");
const civicColors = ["Racing Blue", "Championship White", "Sonic Gray"];

const viosColors = [
  "Super Red V",
  "Black 1",
  "Alumina Jade Metallic",
  "Grayish Blue Mica Mettalic",
  "White Pearl Crystal Shine",
];
const innovaColors = [
  "White Pearl Crystal Shine",
  "Silver Metallic 1",
  "Black 1",
  "Blackish Red Mica",
  "Alumina Jade Metallic",
];
const fortunerColors = [
  "Attitude Black Mica",
  "Sparkling Black Pearl Crystal Shine",

  "Platinum White Pearl Mica",
  "Gray Metallic",
  "Silver Metallic 3",
];
function civicColorPicker(value) {
  for (let i = 0; i < 3; i++) {
    if (value === i) {
      allCivicCircle[i].classList.add("btn-border");
      allCivicImg[i].classList.add("appear");
      document.getElementById(
        "civic-color-picker-text"
      ).innerHTML = `${civicColors[i]}`;
    } else {
      allCivicCircle[i].classList.remove("btn-border");
      allCivicImg[i].classList.remove("appear");
    }
  }
}
function viosColorPicker(value) {
  for (let i = 0; i < 5; i++) {
    if (value === i) {
      allViosCircle[i].classList.add("btn-border");
      allViosImg[i].classList.add("appear");
      document.getElementById(
        "vios-color-picker-text"
      ).innerHTML = `${viosColors[i]}`;
    } else {
      allViosCircle[i].classList.remove("btn-border");
      allViosImg[i].classList.remove("appear");
    }
  }
}
function invColorPicker(value) {
  for (let i = 0; i < 5; i++) {
    if (value === i) {
      allInnovaCircle[i].classList.add("btn-border");
      allInnovaImg[i].classList.add("appear");
      document.getElementById(
        "inv-color-picker-text"
      ).innerHTML = `${innovaColors[i]}`;
    } else {
      allInnovaCircle[i].classList.remove("btn-border");
      allInnovaImg[i].classList.remove("appear");
    }
  }
}

function ftrColorPicker(value) {
  for (let i = 0; i < 5; i++) {
    if (value === i) {
      allFortunerCircle[i].classList.add("btn-border");
      allFortunerImg[i].classList.add("appear");
      document.getElementById(
        "ftr-color-picker-text"
      ).innerHTML = `${fortunerColors[i]}`;
    } else {
      allFortunerCircle[i].classList.remove("btn-border");
      allFortunerImg[i].classList.remove("appear");
    }
  }
}
