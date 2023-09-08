$(document).ready(function () {
    $('.header-burger__menu').click(function(event) {
        $('.header-burger__menu, .header-nav').toggleClass('active')
        $('body').toggleClass('lock');
    });
});