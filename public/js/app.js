var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])

window.addEventListener('mouseup', function(event){
    var box = document.getElementByClassName('mobile-menu.active')
    if(event.target != box && event.target.parentNode != box){
        box.style.display = 'none'
    }
})