const initReplaceBlocks = function() {
    if (!document.querySelector("[data-replace-from]")) {
        return;
    }
    const replaceBlocks = document.querySelectorAll("[data-replace-from]");
    replaceBlocks.forEach(function(item) {
        const name = item.dataset.replaceFrom,
            point = document.querySelector(`[data-replace-to="${name}"]`);
        let viewport = name.indexOf("mob") > 0 ? 767 : 1201;
        if (window.innerWidth >= viewport) {
            if (point.children.length > 0) {
                item.append(point.children[0]);
                point.style.display = "none";
                item.style.display = null;
            }
            // point.children.length > 0 ? item.innerHTML = point.innerHTML : null;
            // point.innerHTML = null;
        }
        else {
            if (item.children.length > 0) {
                point.append(item.children[0]);
                item.style.display = "none";
                point.style.display = null;
            }
            // item.children.length > 0 ? point.innerHTML = item.innerHTML : null;
            // item.innerHTML = null;
        }
    })
}
initReplaceBlocks();
window.addEventListener('resize', initReplaceBlocks);