import { Component } from "./component.js";

export class HeaderComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {

        // // const $catalogBtn = this.$el.querySelector(".js-catalog-btn");
        // // const $catalog = this.$el.querySelector(".catalog");
        const $jsLeadingIcon = this.$el.querySelector(".leading_icon");

        // $catalogBtn.addEventListener("click", () => {
        //     $catalog.classList.toggle("active");
        // });

        if (window.innerWidth <= 800) {
            $jsLeadingIcon.addEventListener("click", () => {
                console.log("Open");
            });
        }
        

    }
}