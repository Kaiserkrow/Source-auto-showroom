let allSection= [...document.getElementsByClassName("badge-button-container")];
let sections = document.getElementById("sections");
let allCenterIcon = [...document.getElementsByClassName("center-icon")];

console.log(allCenterIcon);

sections.addEventListener("scroll", () => {
  let everyUnderline = [...document.getElementsByClassName("underline")];
  const height = sections.offsetHeight;
  let scroll = sections.scrollTop;
  const direction = scroll - document.lastScrollPosition > 0 ? "down" : "up";


  if (scroll === 0 || scroll < height*.5) {
    allSection[0].classList.add("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");

  } else if (scroll > height - height / 2 && scroll < height*1.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.add("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");

  } else if (scroll > (height * 1) + height / 2 && scroll < height * 2.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.add("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.remove("animate-active");

  } else if (scroll > (height * 2) + height / 2 && scroll < height * 3.5) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.add("animate-active");
    allSection[4].classList.remove("animate-active");

  } else if (scroll > height * 3 && scroll < height * 4) {
    allSection[0].classList.remove("animate-active");
    allSection[1].classList.remove("animate-active");
    allSection[2].classList.remove("animate-active");
    allSection[3].classList.remove("animate-active");
    allSection[4].classList.add("animate-active");

  }
});
