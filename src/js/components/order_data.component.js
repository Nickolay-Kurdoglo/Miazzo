import { Component } from "./component.js";

export class OrderDataComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        const $stepNumber = this.$el.querySelector(".step_number");
        const $orderSections = Array.from(this.$el.querySelectorAll(".js-order-section"));
        const $stepButtons = Array.from(this.$el.querySelectorAll(".js-step-btn"));

        $stepButtons.forEach((button, index) => {
            button.addEventListener("click", event => {
                $stepButtons.map(btn => btn.classList.remove("active"));
                $orderSections.map(section => section.classList.remove("active"));
                $orderSections[index].classList.add("active")

                let currentStep = 0;

                $orderSections.forEach((section, index) => {
                    if (section.classList.contains("active")) {
                        currentStep = index;
                        return;
                    }
                });

                for(let i = 0; i <= currentStep; i++) {
                    $stepButtons[i].classList.add("active")
                }

                $stepNumber.innerText =  `Шаг ${currentStep + 1}`;

            });
        });

    }
}