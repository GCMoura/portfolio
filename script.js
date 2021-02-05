//hamburguer-menu
var hamburguer = document.querySelector('.menu-mobile')
var menu = document.querySelector('.menu')
var menuLink = document.querySelectorAll('.menu > a')
var isOpen = false

hamburguer.addEventListener('click', hamburguerMenu, false)

function hamburguerMenu() {
  if(isOpen === false){
    menu.classList.add("menu-open")
    hamburguer.firstElementChild.classList.add('hamburguer-x')
    isOpen = true
  } else {
    menu.classList.remove('menu-open')
    hamburguer.firstElementChild.classList.remove('hamburguer-x')
    isOpen = false
  }
}

menuLink.forEach(link => {
  link.addEventListener('click', hamburguerMenu, false)
})

//header-shadow
var header = document.querySelector("header");

window.addEventListener("scroll", toggleHeader, false);

function toggleHeader() {
  if (window.pageYOffset > 60){
    header.classList.add("header-shadow");
  } else if (
    window.pageYOffset <= 60 &&
    header.classList.contains("header-shadow")
  ) {
    header.classList.remove("header-shadow");
  }
}
