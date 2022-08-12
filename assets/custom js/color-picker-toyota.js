let allFortunerImg = document.getElementsByClassName("fortuner-img");
let allFortunerCircle = document.getElementsByClassName("fortuner-circle");
console.log(allFortunerCircle, allFortunerImg);

function ftrPickWhite() {
  allFortunerImg[0].classList.add("appear");
  allFortunerImg[1].classList.remove("appear");
  allFortunerImg[2].classList.remove("appear");
  allFortunerImg[3].classList.remove("appear");
  allFortunerImg[4].classList.remove("appear");
  allFortunerCircle[0].classList.add("btn-border");
  allFortunerCircle[1].classList.remove("btn-border");
  allFortunerCircle[2].classList.remove("btn-border");
  allFortunerCircle[3].classList.remove("btn-border");
  allFortunerCircle[4].classList.remove("btn-border");
  document.getElementById("ftr-color-picker-text").innerHTML =
    "Platinum White Pearl Mica";
}

function ftrPickBlack() {
  allFortunerImg[0].classList.remove("appear");
  allFortunerImg[1].classList.add("appear");
  allFortunerImg[2].classList.remove("appear");
  allFortunerImg[3].classList.remove("appear");
  allFortunerImg[4].classList.remove("appear");
  allFortunerCircle[0].classList.remove("btn-border");
  allFortunerCircle[1].classList.add("btn-border");
  allFortunerCircle[2].classList.remove("btn-border");
  allFortunerCircle[3].classList.remove("btn-border");
  allFortunerCircle[4].classList.remove("btn-border");
  document.getElementById("ftr-color-picker-text").innerHTML =
    "Sparkling Black Pearl Crystal Shine";
}
function ftrPickMicaBlack() {
  allFortunerImg[0].classList.remove("appear");
  allFortunerImg[1].classList.remove("appear");
  allFortunerImg[2].classList.add("appear");
  allFortunerImg[3].classList.remove("appear");
  allFortunerImg[4].classList.remove("appear");
  allFortunerCircle[0].classList.remove("btn-border");
  allFortunerCircle[1].classList.remove("btn-border");
  allFortunerCircle[2].classList.add("btn-border");
  allFortunerCircle[3].classList.remove("btn-border");
  allFortunerCircle[4].classList.remove("btn-border");
  document.getElementById("ftr-color-picker-text").innerHTML =
    "Attitude Black Mica";
}
function ftrPickGray() {
  allFortunerImg[0].classList.remove("appear");
  allFortunerImg[1].classList.remove("appear");
  allFortunerImg[2].classList.remove("appear");
  allFortunerImg[3].classList.add("appear");
  allFortunerImg[4].classList.remove("appear");
  allFortunerCircle[0].classList.remove("btn-border");
  allFortunerCircle[1].classList.remove("btn-border");
  allFortunerCircle[2].classList.remove("btn-border");
  allFortunerCircle[3].classList.add("btn-border");
  allFortunerCircle[4].classList.remove("btn-border");
  document.getElementById("ftr-color-picker-text").innerHTML = "Gray Metallic";
}

function ftrPickSilver() {
  allFortunerImg[0].classList.remove("appear");
  allFortunerImg[1].classList.remove("appear");
  allFortunerImg[2].classList.remove("appear");
  allFortunerImg[3].classList.remove("appear");
  allFortunerImg[4].classList.add("appear");
  allFortunerCircle[0].classList.remove("btn-border");
  allFortunerCircle[1].classList.remove("btn-border");
  allFortunerCircle[2].classList.remove("btn-border");
  allFortunerCircle[3].classList.remove("btn-border");
  allFortunerCircle[4].classList.add("btn-border");
  document.getElementById("ftr-color-picker-text").innerHTML =
    "Silver Metallic 3";
}
