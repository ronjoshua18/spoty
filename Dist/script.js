const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay =document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("transition:.5s ease");
  arjay.classList.toggle("show");
  
});

const dropDown = document.querySelectorAll(".links__item h4");
dropDown.forEach((dropDowns) => {
    dropDowns.addEventListener("click", () => {
        dropDowns.nextElementSibling.classList.toggle("open");
        dropDowns.querySelector("i").classList.toggle("open");
    })
})