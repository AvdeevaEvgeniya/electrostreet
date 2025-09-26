const initFillSelect = function () {
    if (!document.querySelector(".select._range") && !document.querySelector(".select._multi")) {
        return;
    }
    const fillSelect = function (e) {
        const input = e.target.closest(".select._range input") || e.target.closest(".select._multi input");
        if (!input) {
            return;
        }
        const cont = input.closest(".select");
        if (cont.classList.contains("_range")) {
            const min = cont.querySelector(".irs-hidden-input").dataset.min,
                max = cont.querySelector(".irs-hidden-input").dataset.max,
                curMin = cont.querySelector("._range1").value,
                curMax = cont.querySelector("._range2").value;
            if (curMin == min && curMax == max) {
                cont.classList.remove("_filled");
            }
            else {
                cont.classList.add("_filled");
            }
        }
        else if (cont.classList.contains("_multi")) {
            if (cont.querySelector(".checkbox__input:checked")) {
                cont.classList.add("_filled");
            }
            else {
                cont.classList.remove("_filled");
            }
        }
    },
    clearRange = function (e) {
        const btn = e.target.closest(".select._range .filter-alt__clear") || e.target.closest(".select._multi .filter-alt__clear");
        if (!btn) {
            return;
        }
        e.preventDefault();
        const cont = btn.closest(".select");
        cont.click();
        if (cont.classList.contains("_range")) {
            const min = cont.querySelector(".irs-hidden-input").dataset.min,
                max = cont.querySelector(".irs-hidden-input").dataset.max,
                curMin = cont.querySelector("._range1"),
                curMax = cont.querySelector("._range2");
            curMin.value = min;
            curMax.value = max;
            curMin.dispatchEvent(new Event('change',{bubbles: true, cancelable: false, composed: false}));
            curMax.dispatchEvent(new Event('change',{bubbles: true, cancelable: false, composed: false}));
            cont.classList.remove("_filled");
        }
        else if (cont.classList.contains("_multi")) {
            cont.querySelectorAll("input:checked").forEach(function (el) {
                el.checked = false;
                cont.classList.remove("_filled");
            })
        }
    }
    document.addEventListener("input", fillSelect);
    document.addEventListener("click", clearRange);
}
initFillSelect();