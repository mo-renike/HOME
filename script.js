//preloader and pop-up text
window.onload = function () {
    document.querySelector(".preloader").style.display = "none";
  };

  // Sticky Navbar
const navbar = document.querySelector("header");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;
