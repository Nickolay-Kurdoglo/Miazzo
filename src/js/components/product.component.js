import { Component } from "./component.js";

export class ProductComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {

        const $galleryItems = Array.from(this.$el.querySelectorAll(".gallery_item"));

        window.addEventListener("DOMContentLoaded", () => {
            const $carouserList = this.$el.querySelector(".splide__list");
            const $galleryImages = this.$el.querySelectorAll(".gallery_item");
            const galleryObserver = new MutationObserver((mutations) => {
                let $carouserSlides = this.$el.querySelectorAll(".splide__slide");
                let currentSlide = 0;

                $carouserSlides.forEach((item, index) => {
                    if (item.classList.contains("is-active")) {
                        currentSlide = index;
                        
                        $galleryImages.forEach(item => this.removeClass(item, "active"));
                        this.addClass($galleryImages[currentSlide], "active")
                    }
                });
            });

            galleryObserver.observe($carouserList, {
                childList: true,
                attributes: true
            });
        });

        // Табы описания товара

        const $tabset = this.$el.querySelector(".tabset");
        const $tabsNav = [...$tabset.querySelectorAll(".tabset__item")];
        const $tabsPage = [...$tabset.querySelectorAll(".tabset__page")];

        $tabsNav.forEach((item, index) => {
            item.addEventListener("click", () => {
                if (item.classList.contains("active")) return;

                $tabsNav.map(item => item.classList.remove("active"));
                $tabsNav[index].classList.add("active");

                $tabsPage.map(item => item.classList.remove("active"));
                $tabsPage[index].classList.add("active");
            })
        })

        const $changeParamOpen = this.$el.querySelector(".js-changeParam-open");

        $changeParamOpen.addEventListener("click", () => {
            document.querySelector(".change_parameters").classList.add("active");
            document.body.style.overflowY = "hidden";
        });
    }
}