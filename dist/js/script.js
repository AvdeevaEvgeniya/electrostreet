const initAltFilter = function() {
    const filter = document.querySelector(".filter-alt");
    if (!filter) {
        return;
    }
    const toggleDesktop = function (e) {
        const btn = e.target.closest(".filter-alt__more");
        if (!btn) {
            return;
        }
        e.preventDefault();
        filter.classList.toggle("_active");
    }
    document.addEventListener("click", toggleDesktop);
}
initAltFilter();
const initMegamenuCorrection = function () {
    const openSubmenu = function (e) {
        const btn = e.target.closest("a._dropdown");
        if (!btn || !btn.closest(".megamenu")) {
            return;
        }
        const supText = btn.querySelector('sup')?.innerText || '',
            text = btn.innerText.replace(supText, '').trim();
        btn.closest("[class*='megamenu__item-']").querySelector("[class*='megamenu__lvl-']").querySelector(".megamenu__cat").innerText = text;
    },
    closeMenu = function (e) {
        const btn = e.target.closest(".megamenu__btn");
        if (!btn) {
            return;
        }
        const cont = btn.closest(".megamenu__dropdown");
        cont.querySelector(".megamenu__item-1._active")?.classList.remove("_active");
        cont.querySelector(".megamenu__item-2._active")?.classList.remove("_active");
    }
    document.addEventListener("click", openSubmenu);
    document.addEventListener("click", closeMenu);
}

initMegamenuCorrection();
const initClearInput = function () {
    const inputs = document.querySelectorAll(".input-interval__value input");
    if (inputs.length < 1) {
        return;
    }
    inputs.forEach(function (item) {
        if (item.value == item.min || item.value == item.max) {
            item.value = ""
        }
    })
}
const initRanges = function () {
    const ranges = document.querySelectorAll(".range-double");
    ranges.forEach(function (item) {
        let $range = $(item.querySelector(".input-range")),
            min = +item.querySelector(".input-range").dataset.min,
            max = +item.querySelector(".input-range").dataset.max;
        if (item.querySelector("._range1")) {
            let $inputFrom = $(item.querySelector("._range1")),
                $inputTo = $(item.querySelector("._range2")),
                instance,
                from = min,
                to = max;
            $range.ionRangeSlider({
                type: "double",
                min: min,
                max: max,
                hide_min_max: true,
                hide_from_to: true,
                force_edges: true,
                onStart: updateInputs,
                onChange: updateInputs,
                onFinish: updateInputs1
            });
            instance = $range.data("ionRangeSlider");
            function updateInputs (data) {
                from = data.from;
                to = data.to;
                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
            }
            function updateInputs1 (data) {
                from = data.from;
                to = data.to;
                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
                item.querySelector("._range1").dispatchEvent(new Event('input',{bubbles: true, cancelable: false, composed: false}));
            }
            $inputFrom.on("change", function () {
                var val = $(this).prop("value");
                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }
                instance.update({
                    from: val
                });
                $(this).prop("value", val);
            });
            $inputTo.on("change", function () {
                var val = $(this).prop("value");
                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }
                instance.update({
                    to: val
                });
                $(this).prop("value", val);
            });
        }
        $range.ionRangeSlider({
            type: "double",
            hide_min_max: true,
            force_edges: true
        });
    })
    initClearInput();
}
initRanges();

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