const mainSlider = new Swiper(".js-swiper-team", {
    initialSlide: 0,
    spaceBetween: 20,
    loop: true,
    effect: viewport > 640 ? "fade" : "slide",
    breakpoints: {
        320: {
            slidesPerView: 1.2
        },
        640: {
            slidesPerView: 1.5
        },
        992: {
            slidesPerView: 1
        }
    },
});

const thumbnailsSlider = new Swiper(".js-swiper-thumbnails", {
    slidesPerView: 4,
    loopedSlides: 5,
    spaceBetween: 20,
    loop: true,
    effect: "slide",
    allowTouchMove: false,
    slideToClickedSlide: true,
    clickable: true,
    initialSlide: 0,
    on: {
        slideChange: function() {
            mainSlider.slideTo(this.activeIndex);
            console.log(mainSlider.activeIndex);
        }
    }
});

function blogSwiper() {
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
}

function runningLine() {
    let runningLineSwiper = new Swiper('.running-swiper', {
        initialSlide: 0,
        allowTouchMove: false,
        speed: 4500,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 0.93,
                spaceBetween: 15,
            },
            640: {
                spaceBetween: 25,
                slidesPerView: 1.06,
                speed: 5000,
            },
            992: {
                slidesPerView: 1.5,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 1.29,
            },
            1441: {
                slidesPerView: 1.55,
            }
        },
    });
}

blogSwiper();
runningLine();
