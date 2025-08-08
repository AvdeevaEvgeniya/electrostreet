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