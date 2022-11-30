import { Component } from "./component.js";

export class TextFieldComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        const textInput = this.$el.querySelector(".text_field-input");
        const removeTextBtn = this.$el.querySelector(".js-remove-text");

        removeTextBtn.addEventListener("click", () => {
            textInput.value = "";
        });

    }
}