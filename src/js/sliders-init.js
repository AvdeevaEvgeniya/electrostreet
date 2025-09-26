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

    const sliders4cols = document.querySelectorAll(".swiper._4-col");
    if (sliders4cols.length > 0) {
        sliders4cols.forEach(function (item) {
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
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                },
                on: {
                    afterInit: function (e) {
                        const sliders = e.$el[0].querySelectorAll(".swiper");
                        if (sliders.length > 0) {
                            sliders.forEach(function (item) {
                                item.swiper.update();
                            })
                        }
                    }
                }
            })
        })
    }

    const sliders5cols = document.querySelectorAll(".swiper._5-col");
    if (sliders5cols.length > 0) {
        sliders5cols.forEach(function (item) {
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
                    767: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                },
                on: {
                    afterInit: function (e) {
                        const sliders = e.$el[0].querySelectorAll(".swiper");
                        if (sliders.length > 0) {
                            sliders.forEach(function (item) {
                                item.swiper.update();
                            })
                        }
                    }
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

    const slidersMob = document.querySelectorAll(".swiper._mob");
    if (slidersMob.length > 0 && window.innerWidth < 530) {
        slidersMob.forEach(function (item) {
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
            })
        })
    }

    if (document.querySelector(".gallery-thumbs._card")) {
        const galleryThumbsGallery = new Swiper('.gallery-thumbs._card', {
            spaceBetween: 10,
            slidesPerView: 5,
            slideToClickedSlide: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            freeMode: true,
            direction: "vertical",
        });
        const galleryTopGallery = new Swiper('.gallery-top._card', {
            spaceBetween: 0,
            speed: 600,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // loop: true,
            thumbs: {
                swiper: galleryThumbsGallery,
                autoScrollOffset: 1
            },
            navigation: {
                nextEl: '.swiper-button-next._card',
                prevEl: '.swiper-button-prev._card',
            },
            watchOverflow: true,
            autoHeight: false,
            watchSlidesProgress: true,
            preloadImages: false,
            pagination: {
                el: '.swiper-pagination._card',
                type: 'bullets',
                clickable: true,
                // dynamicBullets: true,
            },
        });
    }
}

initOtherSliders();