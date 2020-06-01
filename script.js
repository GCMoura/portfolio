var projectLink = document.querySelectorAll('.project-link')
var imagePortfolio = document.querySelector('.img-portfolio')
var imagePortfolioMobile = document.querySelector('.img-portfolio-mobile')
var siteLink = document.querySelector('.site-link')
var siteInfo = document.querySelector('.site-info')

projectLink.forEach(link => {
    link.addEventListener('click', function() {showProject(link.id)}, false)
})

function showProject(name){
    imagePortfolio.style.display = "block"
    siteInfo.style.display = "block"
    if(name == "Country Flag Game" || name == "Pomodoro Clock" || name == "Weather App"){ //possuem a versão mobile
        imagePortfolio.style.marginLeft = "150px"
        imagePortfolio.style.height = "500px"
        imagePortfolio.style.width = "550px"
        imagePortfolio.setAttribute('id', `${name}`)
        imagePortfolio.setAttribute('src', `./img/${name}.png`)

        imagePortfolioMobile.setAttribute('src', `./img/${name} Mobile.png`)
        imagePortfolioMobile.style.display = "block"
        imagePortfolioMobile.style.marginLeft = "-50px"
        imagePortfolioMobile.style.height = "350px"
        imagePortfolioMobile.style.width = "400px"

    } else {
        imagePortfolioMobile.style.display = "none"
        imagePortfolio.style.marginLeft = "150px"
        imagePortfolio.style.height = "500px"
        imagePortfolio.style.width = "700px"
        imagePortfolio.setAttribute('src', `./img/${name}.png`)
        imagePortfolio.setAttribute('id', `${name}`)
    }
}

imagePortfolio.addEventListener('click', function(){showSite(imagePortfolio.id)}, false)

function showSite(id) {
    if(id == "Book Search"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/BookSearch/')
    }
    if(id == "Country Flag Game"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/countryFlag/')
    }
    if(id == "Currency Converter"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/conversorJS/')
    }
    if(id == "Memory Card Game"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/memoryCardGame/')
    }
    if(id == "Pomodoro Clock"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/pomodoroClock/')
    }
    if(id == "Weather App"){
        siteLink.setAttribute('href', 'https://gcmoura.github.io/weatherApp/')
    }
}
