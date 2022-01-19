
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


const toggler =  document.querySelector('#toggler')
const navs = document.querySelectorAll(".header__item");
toggler.addEventListener('click', () =>{
 navbar.classList.toggle('mobile')
})
for (const nav of navs) {
  nav.addEventListener("click", () => {
    navbar.classList.remove('mobile')
  });
}
