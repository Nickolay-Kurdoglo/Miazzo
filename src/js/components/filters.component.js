import { Component } from "./component.js";

export class FilterComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {

        const $filtersHeaders = [...this.$el.querySelectorAll(".js-filter-header")],
            $filterListBody = [...this.$el.querySelectorAll(".filters__parameters-list")],
            $filterRangeSliders = [...this.$el.querySelectorAll(".filters-price__range-input")],
            $filterRangeProgres = this.$el.querySelector(".filters-price__range"),
            $filterPriceInput = [...this.$el.querySelectorAll(".filters-price__inputs .text_field-input")],
            $filterOpenBtn = document.querySelector(".js-open-filter"),
            $filterCloseBtn = this.$el.querySelector(".js-close-filter");

        $filterListBody.forEach(item => {
            if (item.offsetHeight < 224) item.style.overflowY = "auto";
        });

        $filtersHeaders.forEach(button => {
            button.addEventListener("click", event => {
                event.preventDefault();
                button.parentElement.classList.toggle("active")
            });
        });

        $filterRangeSliders.forEach(slider => {
            slider.addEventListener("input", event => {

                let minValue = parseInt($filterRangeSliders[0].value),
                    maxValue = parseInt($filterRangeSliders[1].value),
                    priceGap = 1000;

                if (maxValue - minValue < priceGap) {
                    if (event.target.classList.contains("range-input-min")) {
                        $filterRangeSliders[0].value = maxValue - priceGap;
                    } else {
                        $filterRangeSliders[1].value = minValue + priceGap;
                    }
                } else {
                    $filterPriceInput[0].value = minValue;
                    $filterPriceInput[1].value = maxValue;
                    $filterRangeProgres.style.left =`${((minValue / $filterRangeSliders[0].max) * 100).toFixed(2)}%`;
                    $filterRangeProgres.style.right =`${(100 - (maxValue / $filterRangeSliders[1].max) * 100).toFixed(2)}%`;
                }
            });
        });

        $filterPriceInput.forEach((priceInput, inputIndex) => {
            priceInput.addEventListener("input", event => {
                const minValue = parseInt($filterRangeSliders[0].min),
                    maxValue = parseInt($filterRangeSliders[1].max);
                let currentMin = parseInt($filterRangeSliders[0].value),
                    currentMax = parseInt($filterRangeSliders[1].value);


                if (priceInput.value > minValue && priceInput.value < maxValue) {
                    console.log(`${currentMin} ||| ${priceInput.value} ||| ${currentMax}`);

                    if (inputIndex == 0 && priceInput.value < currentMax) {
                        $filterRangeSliders[0].value = priceInput.value;
                        $filterRangeProgres.style.left = `${((parseInt(priceInput.value) / maxValue) * 100).toFixed(2)}%`;

                    }

                    if (inputIndex == 1 && priceInput.value > currentMin) {
                        $filterRangeSliders[1].value = priceInput.value;
                        $filterRangeProgres.style.right = `${(100 - (parseInt(priceInput.value) / maxValue) * 100).toFixed(2)}%`;
                    }
                }

            });
        });

        $filterOpenBtn.addEventListener("click", () => {
            this.$el.classList.add("active");
            document.body.style.overflowY = "hidden";
        });

        $filterCloseBtn.addEventListener("click", () => {
            this.$el.classList.remove("active");
            document.body.style.overflowY = "initial";
        });
    }
}