//not the best code out there, but it works. Would refactor when there's time left
//should have used template literal
let allMdaImg = document.getElementsByClassName("mda-img");
let allMdaCircle = document.getElementsByClassName("mda-circle");
let allMiataImg = document.getElementsByClassName("miata-img");
let allMiataCircle = document.getElementsByClassName("miata-circle");

const mdaColors = [
  "Soul Red Crystal Metallic",
  "Jet Black Mica",
  "Machine Gray Metallic",
  "Sonic Silver Metallic",
];
const miataColors = [
  "Eternal Blue Mica",
  "Jet Black Mica",
  "Soul Red Crystal Metallic",
  "Snowflake White Pearl Mica",
];

function mdaColorPicker(value) {
  for (let i = 0; i < 4; i++) {
    if (value === i) {
      allMdaCircle[i].classList.add("btn-border");
      allMdaImg[i].classList.add("appear");
      document.getElementById(
        "mda-color-picker-text"
      ).innerHTML = `${mdaColors[i]}`;
    } else {
      allMdaCircle[i].classList.remove("btn-border");
      allMdaImg[i].classList.remove("appear");
    }
  }
}
function miataColorPicker(value) {
  for (let i = 0; i < 4; i++) {
    if (value === i) {
      allMiataCircle[i].classList.add("btn-border");
      allMiataImg[i].classList.add("appear");
      document.getElementById(
        "miata-color-picker-text"
      ).innerHTML = `${miataColors[i]}`;
    } else {
      allMiataCircle[i].classList.remove("btn-border");
      allMiataImg[i].classList.remove("appear");
    }
  }
}
