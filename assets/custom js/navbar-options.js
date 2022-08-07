document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;
let sections = document.getElementById("sections");

sections.addEventListener("scroll", () => {
  let everyUnderline = [...document.getElementsByClassName("underline")];
  const height = sections.offsetHeight;
  let scroll = sections.scrollTop;
  const direction = scroll - document.lastScrollPosition > 0 ? "down" : "up";

  console.log(direction);

  console.log(`height is: ${height} and scroll is ${scroll}`);
  if (scroll === 0 || scroll < height*.5) {
    everyUnderline[0].classList.add("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
  } else if (scroll > height - height / 2 && scroll < height*1.5) {
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.add("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
  } else if (scroll > (height * 1) + height / 2 && scroll < height * 2.5) {
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.add("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.remove("active");
  } else if (scroll > (height * 2) + height / 2 && scroll < height * 3.5) {
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.add("active");
    everyUnderline[4].classList.remove("active");
  } else if (scroll > height * 3 && scroll < height * 4) {
    everyUnderline[0].classList.remove("active");
    everyUnderline[1].classList.remove("active");
    everyUnderline[2].classList.remove("active");
    everyUnderline[3].classList.remove("active");
    everyUnderline[4].classList.add("active");
  }
});
