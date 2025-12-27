var swiper = new Swiper(".teamSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 25,
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false, /* Slider tetap jalan saat hover */
    },
    freeMode: true,
    /* Tambahkan ini agar transisi tetap mulus walau di-hover */
    freeModeMomentum: false,
    breakpoints: {
        768: { slidesPerView: 3.2 },
        1024: { slidesPerView: 4.2 },
    },
});