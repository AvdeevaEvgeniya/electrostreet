const initBreadCrumbs = function () {
    const cont = document.querySelector(".page-nav");
    if (!cont) {
        return;
    }
    cont.scrollLeft = cont.scrollWidth;
}
initBreadCrumbs();