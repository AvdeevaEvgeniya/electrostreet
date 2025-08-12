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