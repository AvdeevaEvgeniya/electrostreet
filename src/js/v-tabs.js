const initVerticalTabs = function () {
    if (!document.querySelector("[data-v-tabs]")) {
        return;
    }
    const verticalTabs = function (e) {
        const btn = e.target.closest(".v-tabs__list a") || e.target.closest(".v-tabs__header");
        if (!btn) {
            return;
        }
        e.preventDefault();
        if (e.target.closest(".v-tabs__list a")) {
            const cont = btn.closest("[data-v-tabs]"),
                activeContent = cont.querySelector(".v-tabs__content._active"),
                index = Array.prototype.indexOf.call(btn.parentNode.children, btn),
                activeTab = cont.querySelector(".v-tabs__list a._active");
            activeTab ? activeTab.classList.remove("_active") : null;
            activeContent ? activeContent.classList.remove("_active") : null;
            btn.classList.add("_active");
            cont.querySelectorAll(".v-tabs__content")[index].classList.add("_active");
        }
        else {
           btn.closest(".v-tabs__content").classList.toggle("_active");
        }
    }
    document.addEventListener("click", verticalTabs);
}
initVerticalTabs();