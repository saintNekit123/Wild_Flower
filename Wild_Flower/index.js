let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav_item__link");
let listSocial = document.querySelector(".hero__list").cloneNode(true)
let itemSocial = listSocial.querySelectorAll(".hero_list__item")
let svgSocial = listSocial.querySelectorAll(".hero_social__img")
let navItem = document.querySelector(".nav__list")
let navItemLink = navItem.querySelectorAll(".nav_item__link")
let close = document.querySelector(".forma__btn").cloneNode(true)
close.style.right = '40px'


itemSocial.forEach(function (el) {
    el.style.margin = "0"
    el.style.marginRight = "20px"
})

svgSocial.forEach(function (el) {
    el.classList.add("hero_social__img--active")
})


document.getElementById('btn-open').addEventListener('click', function(){
    document.getElementById('forma__open').classList.add('--show');
    document.body.classList.add('stop-scroll')
    document.body.classList.add("shadow");
    
});
  
document.getElementById('btn__close').addEventListener("click", function () {
    document.body.classList.remove("shadow")
    document.body.classList.remove('stop-scroll')
    document.getElementById('forma__open').classList.remove('--show');
})

burger.addEventListener("click",
    
    function () {
        var logo = new Image()
        logo.src = "./img/logo_light.svg"
        logo.width = 117
        logo.style.marginBottom = "32px" 
        logo.id = "logo_ligth"
        menu.classList.toggle("header__nav--active");
        menu.classList.toggle("stop-scroll")
        document.getElementById("header-nav").prepend(logo)
        document.getElementById("header-nav").prepend(close)
        document.getElementById("header-nav").append(listSocial)
        document.body.classList.toggle("stop-scroll");
        close.classList.toggle("svg__close--active")
        navItemLink.forEach(function (el) {
            el.style.color = "#ffffff"
        })        
        navItem.style.marginBottom = "48px"
        listSocial.style.display = "flex"
        listSocial.style.marginLeft = "0"   
        
        
    }   
)

menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
        logo_ligth.remove()
        menu.classList.remove("header__nav--active");
        document.body.classList.remove("stop-scroll")
        menu.classList.remove("stop-scroll")
        navItemLink.forEach(function (el) {
            el.style.color = "#161616"
        })        
        navItem.style.marginBottom = "0"
        listSocial.remove()
    })
    
})

close.addEventListener("click", function () {
        logo_ligth.remove()
        menu.classList.remove("header__nav--active");
        document.body.classList.remove("stop-scroll")
        menu.classList.remove("stop-scroll")
        close.classList.remove("svg__close--active")
        navItemLink.forEach(function (el) {
            el.style.color = "#161616"
        })  
        navItem.style.marginBottom = "0"
        listSocial.remove()
})

