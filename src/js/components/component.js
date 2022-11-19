export class Component {
    constructor(element) {
        this.$el = document.querySelector(element);
        this.init()
    }

    init() {
        console.log("Hi component");
    }

    addClass(className) {
        if (!this.$el.classList.contains(className)) this.$el.classList.add(className);
    }

    removeClass(className) {
        if (this.$el.classList.contains(className)) this.$el.classList.remove(className);
    }
}