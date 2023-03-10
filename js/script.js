const navCenter = document.querySelector(".nav-center");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  navCenter.classList.toggle("nav-open");
});

links.addEventListener("click", function () {
  navCenter.classList.remove("nav-open");
});
