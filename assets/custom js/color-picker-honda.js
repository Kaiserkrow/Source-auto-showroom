//not the best code out there, but it works. Would refactor when there's time left

let allCivicImg = document.getElementsByClassName("civic-img");
let allCivicCircle = document.getElementsByClassName("civic-circle");
let allCrvImg = document.getElementsByClassName("crv-img");
let allCrvCircle = document.getElementsByClassName("crv-circle");
let allAccordImg = document.getElementsByClassName("accord-img");
let allAccordCircle = document.getElementsByClassName("accord-circle");
let allSupraImg = document.getElementsByClassName("supra-img");
let allSupraCircle = document.getElementsByClassName("supra-circle");
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
