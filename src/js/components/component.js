export class Component {
    constructor(element) {
        this.$el = document.querySelector(element);
        this.init()
    }

    init() {
        console.log("Hi component");
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

    tabController({tab, tabset, tabContent}, index) {        
        tabset.map(item => this.removeClass(item, "active"));
        tabContent.map(item => this.removeClass(item, "active"));
        this.addClass(tab, "active");
        this.addClass(tabContent[index], "active");
    }
}