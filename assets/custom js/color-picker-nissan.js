//not the best code out there, but it works. Would refactor when there's time left
//should have used template literal
let allZImg = document.getElementsByClassName("z-img");
let allZCircle = document.getElementsByClassName("z-circle");
let allJukeImg = document.getElementsByClassName("juke-img");
let allJukeCircle = document.getElementsByClassName("juke-circle");
let allCretaImg = document.getElementsByClassName("creta-img");
let allCretaCircle = document.getElementsByClassName("creta-circle");

const zColors = [
  "Black Rose",
  "Vibrant Red",
  "Premium Lemans Blue",
  "Blade Silver",
  "Brilliant Silver",
  "Diamond Black",
];
const jukeColors = [
  "Blue",
  "Sunset Red",
  "Bronze",
  "Gun Metallic",
  "Arctic White",
  "Pearl Black",
];
const cretaColors = [
  "Dragon Red",
  "Midnight Black",
  "Metallic Silver",
  "Creamy White",
];
function zColorPicker(value) {
  for (let i = 0; i < 6; i++) {
    if (value === i) {
      allZCircle[i].classList.add("btn-border");
      allZImg[i].classList.add("appear");
      document.getElementById(
        "z-color-picker-text"
      ).innerHTML = `${zColors[i]}`;
    } else {
      allZCircle[i].classList.remove("btn-border");
      allZImg[i].classList.remove("appear");
    }
  }
}
function jukeColorPicker(value) {
  for (let i = 0; i < 6; i++) {
    if (value === i) {
      allJukeCircle[i].classList.add("btn-border");
      allJukeImg[i].classList.add("appear");
      document.getElementById(
        "juke-color-picker-text"
      ).innerHTML = `${jukeColors[i]}`;
    } else {
      allJukeCircle[i].classList.remove("btn-border");
      allJukeImg[i].classList.remove("appear");
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
