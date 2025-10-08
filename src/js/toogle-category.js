const initToogelCategory = function () {
    if (!document.querySelector(".categories")) {
        return;
    }
    const toogelCategory = function (e) {
        const category = e.target.closest(".category");
        if (!category || e.target.closest("._no-tags")) {
            return;
        }
        category.classList.toggle("_active");
    }
    document.addEventListener("click", toogelCategory);
}
initToogelCategory();