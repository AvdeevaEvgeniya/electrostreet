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
            // if (ratio > maxRatio) {
            //     maxRatio = ratio;
            //     maxVisibleElement = element;
            // }
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