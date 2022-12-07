import { Component } from "./component.js";

export class ChangeParamComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {
        const $closePopup = this.$el.querySelector(".js-close-popup");

        $closePopup.addEventListener("click", () => {
            this.$el.classList.remove("active");
            document.body.style.overflowY = "initial";
        });
    }
}