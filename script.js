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

//rain effect

setInterval(createSnowFlake, 100);

function createSnowFlake() {
    const raindrop = document.createElement('i');
    
    raindrop.classList.add('fas')
    raindrop.classList.add('fa-tint')

    raindrop.style.left = Math.random() * window.innerWidth - 30 + 'px'

    raindrop.style.animationDuration = Math.random() * 3 + 5.8 + 's'

    raindrop.style.opacity = Math.random();

    raindrop.style.fontSize = Math.random() * 10 + 10

    document.body.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove()
    }, 5000)

}