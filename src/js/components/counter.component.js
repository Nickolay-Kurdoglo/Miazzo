import { Component } from "./component.js";

export class CounterComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        this.$el.addEventListener("click", event => {

            if (event.target.parentNode.classList.contains("increase")) {
                console.log();

                this.$el.querySelector(".count").value++
            }
        });

    }
}