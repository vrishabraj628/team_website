document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav .menu');
  const hamburger = document.querySelector('.nav .menu .hamburger');

  menu.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });
});

// For Navigation Hamburger
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
const closeMenu = document.querySelector(".close");
const body = document.querySelector("body");
const vw = window.innerWidth;
if (closeMenu.style.display === "flex") {
  closeMenu.style.display = "none";
  body.classList.remove("no-scroll");
} else {
  closeMenu.style.display = "flex";
  body.classList.add("no-scroll");
  if (vw <= 430){
    closeMenu.style.width = "100vw";
  }
  else{
    closeMenu.style.width = "20vw";
  }
}
});
