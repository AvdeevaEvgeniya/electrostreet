const visibleElements = new Map(),
initScrollWatcher = function () {
    if (! document.querySelector(".scrollwatch") || window.innerWidth <= 767) {
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleElements.set(entry.target, entry.intersectionRatio);
                // if (entry.intersectionRatio > 0.5) {
                //     entry.target.classList.add("_50visible")
                // }
            } else {
                visibleElements.delete(entry.target);
                setTimeout(function () {
                    entry.target.classList.remove("_active");
                }, 500)
            }
        });
        let maxVisibleElement = null;
        let maxRatio = 0;
        let minTop = 60000;
        visibleElements.forEach((ratio, element) => {
            const top = element.getBoundingClientRect().top;
            if (ratio > maxRatio) {
                maxRatio = ratio;
                maxVisibleElement = element;
            }
            if (top < minTop && top > 0) {
                minTop = top;
                maxVisibleElement = element;
            }
        });
        const activeEl = document.querySelector(".scrollwatch._active")
        if (maxVisibleElement) {
            if (activeEl) {
                activeEl.classList.remove("_active");
                const anchorLink = document.querySelector(`.anchorlink[href="#${activeEl.id}"]`);
                anchorLink? anchorLink.classList.remove("_active") : true;
            }
            maxVisibleElement.classList.add("_active");
            // maxVisibleElement.classList.add("_init");
            const anchorLink = document.querySelector(`.anchorlink[href="#${maxVisibleElement.id}"]`);
            anchorLink ? anchorLink.classList.add("_active") : true;
        }
    }, { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) })
    document.querySelectorAll('.scrollwatch').forEach(el => observer.observe(el));
},
initScrollToAnchor = function () {
    if (!document.querySelector(".anchorlink")) {
        return;
    }
    const scrollToAnchor = function (e) {
        const btn = e.target.closest('.anchorlink');
        if (!btn) {
            return;
        }
        e.preventDefault();
        const id = btn.href.split('#')[1],
            el = document.getElementById(id),
            rect = el.getBoundingClientRect(),
            targetPosition = window.scrollY + rect.top - 80;
        window.scrollTo({
            top: targetPosition,
        });
    }
    document.addEventListener("click", scrollToAnchor);
}

initScrollWatcher();
initScrollToAnchor();

const initScrollWatcherAlt = function () {
    if (!document.querySelector(".scrollwatch2")) {
        return;
    }
    const blocks = document.querySelectorAll('.scrollwatch2');
    const scrollWatcher = function () {
        let maxBlock = null,
            maxHeight = 0,
            priority = null,
            maxHeightPriority = 0;
        const wh = window.innerHeight;
        blocks.forEach(function (block) {
            let blockVisible = 0;
            const rect = block.getBoundingClientRect(),
                t = rect.top,
                b = rect.bottom,
                h = block.offsetHeight;
            if ((t < 0 && b < 0) || t >= wh) {
                return;
            }
            else if (t > 0 && b <= wh) {
                blockVisible = h;
                if (blockVisible > maxHeightPriority) {
                    maxHeightPriority = h;
                    priority = block;
                }
            }
            else if (t < 0 && b <= wh) {
                blockVisible = b;
            }
            else if (t > 0 && b >= wh) {
                blockVisible = wh - t;
            }
            else if (t < 0 && b >= wh) {
                blockVisible = wh;
            }
            if (maxHeightPriority || blockVisible > maxHeight) {
                maxHeight = maxHeightPriority || blockVisible;
                maxBlock = priority || block;
            }
        });
        const name = maxBlock.querySelector(".anchor")?.id,
            activeLink = document.querySelector(".anchorlink._active");
        activeLink?.classList.remove("_active");
        if (name) {
            const link = document.querySelector(`.anchorlink[href="#${name}"]`);
            link?.classList.add("_active");
            if (link) {
                const cont = link.closest(".card-new__tabs");
                scrollChildIntoViewX(cont, link, { align: 'center', behavior: 'smooth' });
            }
            // link?.scrollIntoView({
            //     behavior: 'smooth',
            //     inline: 'center',
            //     block: 'nearest'
            // });
        }
    }
    scrollWatcher();
    window.addEventListener("scroll", scrollWatcher);
}
initScrollWatcherAlt();
function scrollChildIntoViewX(container, el, {
    align = 'center', behavior = 'smooth', onlyIfNeeded = false, offset = 0
} = {}) {
    if (!container || !el) return;
    const c = container.getBoundingClientRect();
    const e = el.getBoundingClientRect();
    if (onlyIfNeeded && e.left >= c.left && e.right <= c.right) return;

    let left = e.left - c.left + container.scrollLeft - offset;
    if (align === 'center') left -= (c.width - e.width) / 2;
    if (align === 'end')    left -= (c.width - e.width);
    left = Math.max(0, Math.min(left, container.scrollWidth - container.clientWidth));
    container.scrollTo({ left: Math.round(left), behavior });
}
