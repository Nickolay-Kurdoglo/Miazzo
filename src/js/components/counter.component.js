import { Component } from "./component.js";

export class CounterComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        this.$el.addEventListener("click", event => {

            const $count = this.$el.querySelector(".count");

            if (event.target.parentNode.classList.contains("increase")) {
                $count.value++
            }

            if ($count.value > 1 && event.target.parentNode.classList.contains("decrease")) {
                $count.value--
            }
        });

    }
}