//not the best code out there, but it works. Would refactor when there's time left

let allFortunerImg = document.getElementsByClassName("fortuner-img");
let allFortunerCircle = document.getElementsByClassName("fortuner-circle");
let allInnovaImg = document.getElementsByClassName("innova-img");
let allInnovaCircle = document.getElementsByClassName("innova-circle");
const innovaColors = [
  "White Pearl Crystal Shine",
  "Silver Metallic 1",
  "Black 1",
  "Blackish Red Mica",
  "Alumina Jade Metallic",
];
const fortunerColors = [
  "Platinum White Pearl Mica",
  "Sparkling Black Pearl Crystal Shine",
  "Attitude Black Mica",
  "Gray Metallic",
  "Silver Metallic 3",
];

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
