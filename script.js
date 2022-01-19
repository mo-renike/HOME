
// Sticky Navbar
const navbar = document.querySelector(".header");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;

const navs = document.querySelectorAll(".header__item");


for (const nav of navs) {
  nav.addEventListener("click", () => {
    console.log(nav);
  });
}
