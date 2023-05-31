
window.addEventListener('DOMContentLoaded', () => {

    function teamSwiper() {
        let teamThumbnailSwiper = new Swiper('.js-swiper-thumbnails', {
            slidesPerView: 4,
            spaceBetween: 20,
            effect: 'slide',
        });

        let teamSwiper = new Swiper('.js-swiper-team', {
            initialSlide: 0,
            spaceBetween: 20,
            loop: true,
            effect: window.innerWidth >= 992 ? 'fade' : 'slide',
            thumbs: {
                swiper: teamThumbnailSwiper,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                640: {
                   slidesPerView: 1.5,
                },
                992: {
                    slidesPerView: 1,
                }
            }
        });
    }
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
                    slidesPerView: 0.92,
                    spaceBetween: 15,
                },
                640: {
                    spaceBetween: 25,
                    slidesPerView: 1.06,
                    speed: 4000,
                },
                992: {
                    slidesPerView: 1.35,
                    spaceBetween: 50,
                },
                1600: {
                    slidesPerView: 1.7,
                },
            },
        });
    }

    teamSwiper();
    blogSwiper();
    runningLine();
});