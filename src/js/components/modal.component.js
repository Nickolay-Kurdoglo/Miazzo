import { Component } from "./component.js";

export class ModalComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        const modalOpeners = document.querySelectorAll(".js-open-modal");

        modalOpeners.forEach(btn => {
            btn.addEventListener("click", () => {
                this.$el.classList.add("active")
            })
        })

        this.$el.addEventListener("click", event => {
            let clickedEl = event.target;

            if(event.target.classList.contains("overlay"))
                this.$el.classList.remove("active");

            if (clickedEl.classList.contains("js-close-modal") || clickedEl.parentElement.classList.contains("js-close-modal"))
                this.$el.classList.remove("active");
        });

        document.addEventListener("keydown", event => {
            if (this.$el.classList.contains("active") && event.code === "Escape") {
                this.$el.classList.remove("active");
            }
        })

    }
}