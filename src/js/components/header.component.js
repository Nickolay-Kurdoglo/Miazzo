import { Component } from "./component.js";

export class HeaderComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        const $catalogBtn = this.$el.querySelector(".js-catalog-btn");
        const $catalog = this.$el.querySelector(".catalog");

        $catalogBtn.addEventListener("click", () => {
            $catalog.classList.toggle("active");
        });
    }
}