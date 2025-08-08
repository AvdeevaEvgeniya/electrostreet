const initOtherSliders = function () {
    const sliders = document.querySelectorAll(".swiper._single");
    if (sliders.length > 0) {
        sliders.forEach(function (item) {
            const cont = item.closest(".swiper-parent");
            let prev, next, pagination, autoplay, fraction;
            if (cont) {
                prev = cont.querySelector(".swiper-button-prev");
                next = cont.querySelector(".swiper-button-next");
                pagination = cont.querySelector(".swiper-pagination");
                autoplay = cont.dataset.autoplay;
                fraction = cont.dataset.fraction;
            }
            new Swiper(item, {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: next ? next : "",
                    prevEl: prev ? prev : "",
                },
                autoplay: autoplay ? {
                    delay: +autoplay,
                } : "",
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                loop: true,
                speed: 1000,
                disableOnInteraction: false,
                pagination: {
                    el: pagination ? pagination : "",
                    type: fraction ? 'fraction' : 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    530: {
                        autoplay: false,
                    }
                }
            })
        })
    }

    const sliders3cols = document.querySelectorAll(".swiper._3-col");
    if (sliders3cols.length > 0) {
        sliders3cols.forEach(function (item) {
            const cont = item.closest(".swiper-parent");
            let prev, next, pagination, autoheight, fraction, loop;
            if (cont) {
                prev = cont.querySelector(".swiper-button-prev");
                next = cont.querySelector(".swiper-button-next");
                pagination = cont.querySelector(".swiper-pagination");
                fraction = cont.dataset.fraction;
                autoheight = cont.dataset.autoheight;
                loop = cont.dataset.loop;
            }
            new Swiper(item, {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: loop ? true : false,
                navigation: {
                    nextEl: next ? next : "",
                    prevEl: prev ? prev : "",
                },
                autoHeight: autoheight ? true : false,
                speed: 1000,
                watchSlidesProgress: true,
                pagination: {
                    el: pagination ? pagination : "",
                    type: fraction ? 'fraction' : 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    530: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1020: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                }
            })
        })
    }

    const sliders2cols = document.querySelectorAll(".swiper._2-col");
    if (sliders2cols.length > 0) {
        sliders2cols.forEach(function (item) {
            const cont = item.closest(".swiper-parent");
            let prev, next, pagination, autoheight, fraction, loop;
            if (cont) {
                prev = cont.querySelector(".swiper-button-prev");
                next = cont.querySelector(".swiper-button-next");
                pagination = cont.querySelector(".swiper-pagination");
                fraction = cont.dataset.fraction;
                autoheight = cont.dataset.autoheight;
                loop = cont.dataset.loop;
            }
            new Swiper(item, {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: loop ? true : false,
                navigation: {
                    nextEl: next ? next : "",
                    prevEl: prev ? prev : "",
                },
                autoHeight: autoheight ? true : false,
                speed: 1000,
                watchSlidesProgress: true,
                pagination: {
                    el: pagination ? pagination : "",
                    type: fraction ? 'fraction' : 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    530: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                }
            })
        })
    }
}

initOtherSliders();