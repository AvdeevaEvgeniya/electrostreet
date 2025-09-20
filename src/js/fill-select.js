const initFillSelect = function () {
    if (!document.querySelector(".select._range")) {
        return;
    }
    const fillSelect = function (e) {
        const input = e.target.closest(".select._range input");
        if (!input) {
            return;
        }
        const cont = input.closest(".select"),
            min = cont.querySelector(".irs-hidden-input").dataset.min,
            max = cont.querySelector(".irs-hidden-input").dataset.max,
            curMin = cont.querySelector("._range1").value,
            curMax = cont.querySelector("._range2").value;
        if (curMin == min && curMax == max) {
            input.closest(".select._range").classList.remove("_filled");
        }
        else {
            input.closest(".select._range").classList.add("_filled");
        }
    },
    clearRange = function (e) {
        const btn = e.target.closest(".select._range .filter-alt__clear");
        if (!btn) {
            return;
        }
        e.preventDefault();
        const cont = btn.closest(".select");
        cont.click();
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
    document.addEventListener("input", fillSelect);
    document.addEventListener("click", clearRange);
}
initFillSelect();