//not the best code out there, but it works. Would refactor when there's time left

let allSection = [...document.getElementsByClassName("badge-button-container")];
let sections = document.getElementById("sections");
let allCenterIcon = [...document.getElementsByClassName("center-icon")];
let allEmblem = [...document.getElementsByClassName("emblem")];
let body = document.getElementById("body");

console.log(allCenterIcon);

sections.addEventListener("scroll", () => {
  let everyUnderline = [...document.getElementsByClassName("underline")];
  const height = sections.offsetHeight;
  let scroll = sections.scrollTop;
  const direction = scroll - document.lastScrollPosition > 0 ? "down" : "up";

  console.log(direction);
  console.log(allSection);
  console.log(`height is: ${height} and scroll is ${scroll}`);
  if (scroll === 0 || scroll < height * 0.5) {
    allSection[0].classList.add("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");
    everyUnderline[0].classList.add("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
    allEmblem[0].classList.add("emblem-active");
    allEmblem[1].classList.remove("emblem-active");
    allEmblem[2].classList.remove("emblem-active");
    allEmblem[3].classList.remove("emblem-active");
    allEmblem[4].classList.remove("emblem-active");
  } else if (scroll > height - height / 2 && scroll < height * 1.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.add("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.add("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
    allEmblem[0].classList.remove("emblem-active");
    allEmblem[1].classList.add("emblem-active");
    allEmblem[2].classList.remove("emblem-active");
    allEmblem[3].classList.remove("emblem-active");
    allEmblem[4].classList.remove("emblem-active");
  } else if (scroll > height * 1 + height / 2 && scroll < height * 2.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.add("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.add("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
    allEmblem[0].classList.remove("emblem-active");
    allEmblem[1].classList.remove("emblem-active");
    allEmblem[2].classList.add("emblem-active");
    allEmblem[3].classList.remove("emblem-active");
    allEmblem[4].classList.remove("emblem-active");
  } else if (scroll > height * 2 + height / 2 && scroll < height * 3.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.add("animate-active");
    allSection[4].classList.remove("animate-active");
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.add("active");
    everyUnderline[4].classList.remove("active");
    allEmblem[0].classList.remove("emblem-active");
    allEmblem[1].classList.remove("emblem-active");
    allEmblem[2].classList.remove("emblem-active");
    allEmblem[3].classList.add("emblem-active");
    allEmblem[4].classList.remove("emblem-active");
  } else if (scroll > height * 3 && scroll < height * 4) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.add("animate-active");
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.add("active");
    allEmblem[0].classList.remove("emblem-active");
    allEmblem[1].classList.remove("emblem-active");
    allEmblem[2].classList.remove("emblem-active");
    allEmblem[3].classList.remove("emblem-active");
    allEmblem[4].classList.add("emblem-active");
  }
});
let state = 0;

function buttonFunction() {
  let blurContainer = document.getElementById("blur-container");
  let bgWhite = document.getElementById("nav-bar");
  console.log(state);
  if (state === 0) {
    bgWhite.classList.add("nav-bar-active");
    blurContainer.classList.add("blur");

    state = 1;
  } else if (state === 1) {
    bgWhite.classList.remove("nav-bar-active");
    blurContainer.classList.remove("blur");

    state = 0;
  }
}
