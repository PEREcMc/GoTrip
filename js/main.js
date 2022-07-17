// carousel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    responsive : {
        0: {
            items: 1,    
        },
        460 : {
            items: 2,
        },
        700: {
            items: 3,
        },
        850 : {
            items: 3,
        },
        1000 : {
            margin: 20,
        },
        1270 : {
            margin: 30,
        },
    },
});

$('.slider__button--back').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// nav icon

const navBtn = document.querySelector('.nav__toggle')
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')
const headerContent = document.querySelector('.header__content')

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile')
    headerContent.classList.toggle('header__content-mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll')
}