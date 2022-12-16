export class Component {
    constructor(element) {
        this.$el = document.querySelector(element);
        this.init()
    }

    init() {
        
    }

    addClass(element, className) {
        if (!element.classList.contains(className)) element.classList.add(className);
    }

    removeClass(element, className) {
        if (element.classList.contains(className)) element.classList.remove(className);
    }

    toggleClass(element, className) {
        element.classList.toggle(className);
    }

    tabController({tab, tabset, tabContent}, index, activeClass = "active") {        
        tabset.map(item => this.removeClass(item, activeClass));
        tabContent.map(item => this.removeClass(item, activeClass));
        this.addClass(tab, activeClass);
        this.addClass(tabContent[index], activeClass);
    }
}