import { Component } from "../components/component.js";

export class ConstructorSection extends Component {
    constructor (element) {
        super(element)
    }

    init() {
        
        const   $colorPalettes = this.$el.querySelector(".color__palettes"),
                $colorHues = Array.from(this.$el.querySelectorAll(".color__hue")),
                $colorTonesContainer = this.$el.querySelector(".color__tones"),
                $colorTones = Array.from(this.$el.querySelectorAll(".color__tone"));

        $colorHues.forEach((item, index) => {
            item.addEventListener("click", () => {
                if(!$colorTones[index]) return;
                
                this.tabController({
                    tab: item, 
                    tabset: $colorHues, 
                    tabContent: $colorTones
                }, index);

            });
        });

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains("handler__btn")) {
                this.toggleClass(event.target.parentNode, "active");
            }
        });

        // const $handlersWrapper = this.$el.querySelector(".handler__list");
    }
}