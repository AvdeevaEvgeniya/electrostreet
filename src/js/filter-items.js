const initFilterItems = function () {
    if (!document.querySelector("[data-filters]")) {
        return;
    }
    const filterItems = function (e) {
        const btn = e.target.closest("[data-filter-btn]");
        if (!btn) {
            return;
        }
        const name = btn.dataset.filterBtn,
            cont = btn.closest("[data-filters]"),
            items = cont.querySelectorAll("[data-filter-item]"),
            sliders = cont.querySelectorAll(".swiper");
            items.forEach(function (item) {
                if (item.dataset.filterItem == name || name == "all") {
                    item.style.display = "";
                }
                else {
                    item.style.display = "none";
                }
            })
            if (sliders.length > 0) {
                sliders.forEach(function (item) {
                    item.swiper?.slideTo(0);
                    item.swiper?.update();
                })
            }
    },
    loadFilter = function () {
        const filter = document.querySelectorAll("[data-filters]");
        filter.forEach(function (item) {
            item.querySelector("[data-filter-btn]").closest("label").click();
        })
    }
    document.addEventListener("change", filterItems);
    loadFilter();
}
initFilterItems();