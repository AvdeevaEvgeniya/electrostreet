const initClearInput = function () {
    const inputs = document.querySelectorAll(".input-interval__value input");
    if (inputs.length < 1) {
        return;
    }
    inputs.forEach(function (item) {
        if (item.value == item.min || item.value == item.max) {
            item.value = ""
        }
    })
}
const initRanges = function () {
    const ranges = document.querySelectorAll(".range-double");
    ranges.forEach(function (item) {
        let $range = $(item.querySelector(".input-range")),
            min = +item.querySelector(".input-range").dataset.min,
            max = +item.querySelector(".input-range").dataset.max;
        if (item.querySelector("._range1")) {
            let $inputFrom = $(item.querySelector("._range1")),
                $inputTo = $(item.querySelector("._range2")),
                instance,
                from = min,
                to = max;
            $range.ionRangeSlider({
                type: "double",
                min: min,
                max: max,
                hide_min_max: true,
                hide_from_to: true,
                force_edges: true,
                onStart: updateInputs,
                onChange: updateInputs,
                onFinish: updateInputs1
            });
            instance = $range.data("ionRangeSlider");
            function updateInputs (data) {
                from = data.from;
                to = data.to;
                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
            }
            function updateInputs1 (data) {
                from = data.from;
                to = data.to;
                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
                item.querySelector("._range1").dispatchEvent(new Event('input',{bubbles: true, cancelable: false, composed: false}));
            }
            $inputFrom.on("change", function () {
                const to = $range.ionRangeSlider().data("ionRangeSlider").old_to;
                var val = $(this).prop("value");
                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }
                instance.update({
                    from: val
                });
                $(this).prop("value", val);
            });
            $inputTo.on("change", function () {
                const from = $range.ionRangeSlider().data("ionRangeSlider").old_from;
                var val = $(this).prop("value");
                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }
                instance.update({
                    to: val
                });
                $(this).prop("value", val);
            });
        }
        $range.ionRangeSlider({
            type: "double",
            hide_min_max: true,
            force_edges: true
        });
    })
    initClearInput();
}
initRanges();
