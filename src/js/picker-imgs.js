const initPickerImgs = function () {
    const picker = document.getElementById("picker");
    if (!picker) {
        return;
    }
    const pickerImgs = function (e) {
        const btn = e.target.closest("[data-picker]");
        if (!btn) {
            return;
        }
        const name = btn.dataset.picker;
        picker.querySelector("img._active").classList.remove("_active");
        picker.querySelector(`img[src*="${name}"]`).classList.add("_active");
    }
    document.addEventListener("click", pickerImgs);
}
initPickerImgs();