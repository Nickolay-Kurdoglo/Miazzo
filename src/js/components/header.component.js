import { Component } from "./component.js";

export class HeaderComponent extends Component {
    constructor (element) {
        super(element)
    }

    init() {
        const $jsLeadingIcon = this.$el.querySelector(".leading_icon");
        const $searchBar = this.$el.querySelector(".header__searchbar");
        const $closeSearchbar = this.$el.querySelector(".js-remove-text");

        if (window.innerWidth <= 800) {
            $jsLeadingIcon.addEventListener("click", () => {
                this.addClass($searchBar, "active")
            });

            $closeSearchbar.addEventListener("click", () => {
                this.removeClass($searchBar, "active")
            });
        }

        const $closeSidebar = this.$el.querySelector(".js-close-sidebar");
        const $burgerMenu = this.$el.querySelector(".header__burger");
        const $sidebar = this.$el.querySelector(".header__sidebar");
        const $overlay = this.$el.querySelector(".header__overlay");
        
        $closeSidebar.addEventListener("click", () => {
            this.removeClass($sidebar, "active");
            this.removeClass($overlay, "active");
        });

        
        $overlay.addEventListener("click", () => {
            this.removeClass($sidebar, "active");
            this.removeClass($overlay, "active");
        })

        $burgerMenu.addEventListener("click", () => {
            this.addClass($sidebar, "active");
            this.addClass($overlay, "active");
        });


        // catalog
        
        const $catalogBtn = this.$el.querySelector(".js-catalog");
        const $catalog = this.$el.querySelector(".header__catalog .catalog")

        $catalogBtn.addEventListener("click", () => {
            $catalog.classList.toggle("active");
        });

        const $catalogList = this.$el.querySelector(".catalog__list");
        const $catalogItems = Array.from($catalogList.querySelectorAll(".catalog__item"));

        $catalogItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                if (item.classList.contains("active")) { 
                    this.removeClass(item, "active");
                }
                else {
                    $catalogItems.map(item => this.removeClass(item, "active"))
                    this.addClass(item, "active");
                }
            });
        });



    }
}