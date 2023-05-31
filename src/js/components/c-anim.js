window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const captions = document.querySelectorAll('.js-cover-text');

        captions.forEach((text, index) => {
            if (window.innerWidth < 992) {
                if (index % 2 === 1) {
                    text.classList.add('js-animated-title-left')
                } else {
                    text.classList.add('js-animated-title-right')
                }
            } else {
                if (index === 0 || index === 3) {
                    text.classList.add('js-animated-title-left')
                } else {
                    text.classList.add('js-animated-title-right')
                }
            }
        })

        animatedCover();
        animateLeft();
        animateRight();
        animateCoverButton();
    }, 500);

    animateFeedback();
    countNum('out-1',3,0,3);
    countNum('out-2',5,0,3);
    countNum('out-3',100,0,3);


    document.querySelectorAll('a[href]').forEach(a => {
        a.addEventListener('click', e => {
            scrollToHash(getSamePageAnchor(a), e);
        });
    });

    scrollToHash(window.location.hash);

    animatedTabs('.js-accordion-header');
    animatedTabs('.js-accordion-header-2');
})

function animatedCover() {
    gsap.from('.cover__subtitle', {
        y: 400,
        delay: .4,
        duration: .4,
        scrollTrigger: {
            trigger: '.cover',
            start: 'top bottom',
        },
    })
}

function animateCoverButton() {
    gsap.from('.cover__cta', {
        y: (window.innerWidth < 992) ? -400 : 50,
        opacity: 0,
        delay: 1.6,
        duration: .4,
        scrollTrigger: {
            trigger: '.cover',
            start: 'top bottom',
        },
    });
}






function animateLeft() {
    gsap.from('.js-animated-title-left', {
        x: -1000,
        stagger: 0,
        duration: .4,
        scrollTrigger: {
            trigger: '.cover',
            start: '100px bottom',
        }
    });
}

function animateRight() {
    gsap.from('.js-animated-title-right', {
        x: 2000,
        stagger: 0,
        duration: .4,
        scrollTrigger: {
            trigger: '.cover',
            start: '100px bottom',

        }
    })
}

function getSamePageAnchor (link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
        return false;
    }

    return link.hash;
}

function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(`${hash}`) : false;
    if(elem) {
        if(e) e.preventDefault();
        gsap.to(window, {scrollTo: elem});
    }
}

function countNum(id, value,  delay,  duration) {
    const variable = { val: 0 };

    gsap.to(variable, duration, {
        val: value,
        delay: delay,
        roundProps: "val",
        scrollTrigger: {
            trigger: '.about__item',
            start: 'top bottom',
        },
        onUpdate: function () {
            document.getElementById(id).innerHTML = variable.val;
        }
    });
}

function animatedTabs(tabName) {
    const menus = gsap.utils.toArray(tabName);
    let openMenu;

    const isSecondTabsGroup = tabName === '.js-accordion-header-2';

    menus.forEach((menu, index) => {
        let box = menu.parentNode.querySelector(".js-accordion-content");
        let isOpen = false;

        menu.open = () => {
            if (!isOpen) {
                isOpen = true;
                openMenu && openMenu.close();
                openMenu = menu;
                menu.classList.add('_expanded');

                gsap.to(box, {
                    height: "auto",
                    opacity: 1,
                    "z-index": 1,
                    duration: .6,
                    ease: 'power2.out',
                    overwrite: true
                });
            }
        };

        menu.close = () => {
            if (isOpen) {
                isOpen = false;
                openMenu = null;
                menu.classList.remove('_expanded');

                gsap.to(box, {
                    height: 0,
                    opacity: 0,
                    "z-index": -1,
                    duration: .6,
                    overwrite: true,
                    ease: 'power2.out'
                });
            }
        };

        menu.addEventListener("click", () => {
            isOpen ? menu.close() : menu.open();
            isSecondTabsGroup && switchLogoColor(index, isOpen);
        });
    });
}

function switchLogoColor(index, isOpen) {
    const letters = document.querySelectorAll('.process__letter');

    letters.forEach((letter, i) => {
        if (i === index && isOpen) {
            letter.classList.add('_active');
        } else {
            letter.classList.remove('_active');
        }
    })
}

const serviceList = document.querySelectorAll('.service__item');

serviceList.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('_active')) {
            item.classList.remove('_active');
        } else {
            item.classList.add('_active');
        }
    })
})

function animateFeedback() {
    gsap.from('.js-feedback-animated', {
        opacity: 0,
        y: -400,
        stagger: 0.4,
        duration: 1,
        ease: 'elastic',
        scrollTrigger: {
            trigger: '.feedback__list',
            start: '100px bottom',
        }
    });
    gsap.from('.feedback__item', {
        y: 200,
        opacity: 0,
        stagger: 0,
        duration: .6,
        ease: 'none',
        scrollTrigger: {
            trigger: '.feedback__list',
            start: '100px bottom',
        }
    })
}
