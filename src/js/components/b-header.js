let burger = document.querySelector(".burger")
let body = document.querySelector("body")
let header = document.querySelector(".header")
let navLinks = document.querySelectorAll(".nav__link")

if (burger) {
    burger.onclick = function() {
        header.classList.toggle("_open")
        body.classList.toggle("_fixed")
    }
}

navLinks.forEach(link => {
    link.onclick = function(){
        header.classList.remove("_open")
        body.classList.remove("_fixed")
    }
})


