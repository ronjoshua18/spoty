const toggleMenu = document.querySelector(".toggle__menudev");
const headerNav1 = document.querySelector(".header__nav1 ul");
const slidee =document.querySelector(".evrything")


toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav1.classList.toggle("open");
  headerNav1.style=("z-index:1");
  headerNav1.style=("transition:.5s ease");
  slidee.classList.toggle("show")
  
  
});

const starNav =document.querySelectorAll(".star__nav__link");
const starContent =document.querySelectorAll(".header__nav1");
starNav.forEach((star) => {
    star.addEventListener("click", () => {
        removeActiveStar();
        star.classList.add("active");
        const activeContent= document.querySelector(`#${star.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    })
});