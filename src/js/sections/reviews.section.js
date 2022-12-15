import { Component } from "../components/component.js";

export class ReviewsSection extends Component {
    constructor (element) {
        super(element)
    }

    init() {
        const   $scrollRightBtn = this.$el.querySelector(".js-scroll-right"),
                $scrollLeftBtn = this.$el.querySelector(".js-scroll-left"),
                $scrollContainer = this.$el.querySelector(".reviews__list");

        const scrollNumber = 256;

        $scrollRightBtn.addEventListener("click", () => {
            $scrollContainer.scrollLeft += scrollNumber;
        });

        $scrollLeftBtn.addEventListener("click", () => {
            $scrollContainer.scrollLeft -= scrollNumber;
        });
    }
}