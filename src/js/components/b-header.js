let burger = document.querySelector(".burger")
let body = document.querySelector("body")
let header = document.querySelector(".header")
let navLinks = document.querySelectorAll(".nav__link")

if (burger) {
    burger.onclick = function() {
        header.classList.toggle("_open")
        body.classList.toggle("fixed-body")
    }
}

navLinks.forEach(link => {
    link.onclick = function(){
        header.classList.remove("_open")
        body.classList.remove("fixed-body")
    }
})


