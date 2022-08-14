//not the best code out there, but it works. Would refactor when there's time left

let allCivicImg = document.getElementsByClassName("civic-img");
let allCivicCircle = document.getElementsByClassName("civic-circle");
let allCrvImg = document.getElementsByClassName("crv-img");
let allCrvCircle = document.getElementsByClassName("crv-circle");
let allAccordImg = document.getElementsByClassName("accord-img");
let allAccordCircle = document.getElementsByClassName("accord-circle");
let allBrioImg = document.getElementsByClassName("brio-img");
let allBrioCircle = document.getElementsByClassName("brio-circle");
const civicColors = ["Racing Blue", "Championship White", "Sonic Gray"];

const crvColors = [
  "Ignite Red Metallic",
  "Cosmic Blue Metallic",
  "Meteoroid Gray Metallic",
  "Platinum White Pearl",
];
const accordColors = [
  "Crystal Black Pearl",
  "Meteoroid Gray Metallic",
  "Platinum White Pearl",
];
const brioColors = [
  "Phoenix Orange Pearl",
  "Carnival Yellow",
  "Taffeta White",
  "Modern Steel Metallic",
  "Rallye Red",
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
function crvColorPicker(value) {
  for (let i = 0; i < 4; i++) {
    if (value === i) {
      allCrvCircle[i].classList.add("btn-border");
      allCrvImg[i].classList.add("appear");
      document.getElementById(
        "crv-color-picker-text"
      ).innerHTML = `${crvColors[i]}`;
    } else {
      allCrvCircle[i].classList.remove("btn-border");
      allCrvImg[i].classList.remove("appear");
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
