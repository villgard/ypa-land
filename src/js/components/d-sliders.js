const teamSlides = document.querySelectorAll('.team-slide');


const mainSlider = new Swiper(".js-swiper-team", {
    initialSlide: 0,
    spaceBetween: 20,
    loop: true,
    effect: viewport > 640 ? "fade" : "slide",
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        640: {
            slidesPerView: 1.5,
        },
        992: {
            slidesPerView: 1,
            allowTouchMove: false,
        }
    },
});

const thumbnailsSlider = new Swiper(".js-swiper-thumbnails", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    effect: "slide",
    allowTouchMove: false,
    slideToClickedSlide: true,
    clickable: true,
    initialSlide: 0,
    on: {
        slideChange: function () {
            console.log(this);
            mainSlider.slideTo(this.realIndex % 5, 400, true);
        }
    }
});

let blogSwiper = new Swiper('.js-swiper-blog', {
    initialSlide: 0,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-blog',
        prevEl: '.swiper-button-prev-blog',
    },
    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1.2,
        },
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.8,
        },
        992: {
            allowTouchMove: false,
            slidesPerView: 1,
        },
    }
});

