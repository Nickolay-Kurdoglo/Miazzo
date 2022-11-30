import { Component } from "./component.js";

export class AccordionComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        const $accordionList = Array.from(this.$el.querySelectorAll(".accordion-header"));

        $accordionList.forEach(accordion => {
            accordion.addEventListener("click", () => {
                accordion.parentElement.classList.toggle("open")
            });
        });

    }
}