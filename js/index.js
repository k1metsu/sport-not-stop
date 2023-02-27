const burger = document.querySelectorAll('#nav-toggle')
const menu = document.querySelectorAll('#nav-content')

if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function () {
            for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        });
    }
}

new Swiper(".swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    }
});