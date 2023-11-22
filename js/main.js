var burger = document.querySelector(".burger");
var menu = document.querySelector(".navigation");
var intro = document.querySelector(".presentaion");
var nav = document.querySelector("nav");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  intro.classList.toggle("is-active");
  nav.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
