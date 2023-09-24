$(document).ready(function () {
    $('.header-burger__menu').click(function(event) {
        console.log('test')
        console.log($('.header-burger__menu.active'));
        if ($('.header-burger__menu.active, .header-nav.active').length === 0) {
            $('.header-burger__menu, .header-nav').addClass('active');    
            lockOn();
        } 
        else {
            $('.header-burger__menu.active, .header-nav.active').removeClass('active')
            lockOff();
        }
    });
});

// $(document).ready(function () {
//     $('.header-burger__menu.active').click(function (e) {
//         $('.header-burger__menu, .header-nav').addClass.remove('active');
//         lockOff();
//     })
// });

const body = document.body;
const burgerMenu = document.querySelector('.header-burger__menu');
const burgerNav = document.querySelector('.header-nav');

// const cancelActive = document.getElementsByClassName('.header-burger__menu.active')

// burgerMenu.addEventListener('click', (e) => {

//     lockOn();
//     // default (lockOff)
// })

// cancelActive.addEventListener('click', (e) => {
//     lockOff();
// })

// const scrollOf = document.querySelector('.lock-on');
// const scrollOn = document.querySelector('.lock-off');

function lockOn () {
    let PagePosition = window.scrollY;
    body.classList.add('lock');
    body.dataset.position = PagePosition;
    body.style.top = -PagePosition + 'px';
}

function lockOff () {
    let PagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('lock');
    window.scroll({top: PagePosition});
    body.removeAttribute('data-position');
}