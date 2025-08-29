const initCounter = function () {
    const counter = function (e) {
        const btn =  e.target.closest(".quantity__btn");
        if (!btn) {return}
        e.preventDefault();
        const input = btn.closest(".quantity").querySelector("input");
        if (btn.classList.contains("_plus")) {
            input.value = +input.value + 1;
            input.max && input.value > input.max ? input.value = input.max : true;
        }
        else {
            input.value = +input.value - 1;
            input.min && input.value < input.min ? input.value = input.min : true;
            input.value < 0 ? input.value = 0 : true;
        }
    };
    document.addEventListener("click", counter);
};
initCounter();