import { ModalComponent } from "./components/modal.component.js";

import { TextFieldComponent } from "./components/text_field.component.js";

import { CounterComponent } from "./components/counter.component.js";

import { OrderDataComponent } from "./components/order_data.component.js";

import { HeaderComponent } from "./components/header.component.js";

import { AccordionComponent } from "./components/accordion.component.js";

import { FilterComponent } from "./components/filters.component.js";

import { ProductComponent } from "./components/product.component.js";

import { ChangeParamComponent } from "./components/change_param.component.js";

import { ReviewsSection } from "./sections/reviews.section.js";

import { ConstructorSection } from "./sections/constructon.section.js";

try {
    new ModalComponent("#modal");
} catch {

}

try {
    new TextFieldComponent(".text_field");
} catch {

}

try {
    new CounterComponent(".counter");
} catch {

}

try {
    new OrderDataComponent(".customer_data");
} catch {

}

try {
    new HeaderComponent(".header");
} catch {

}

try {
    new AccordionComponent(".accordion-list");
} catch {

}

try {
    new FilterComponent(".js-filters");
} catch {

}

try {
    new ProductComponent(".product");
} catch {

}

try {
    new ChangeParamComponent(".change_parameters");
} catch {

}

try {
    new ReviewsSection("section.reviews");
} catch {

}

try {
    new ConstructorSection(".constructor");
} catch {

}

try {
    document.addEventListener('DOMContentLoaded', function () {
        // var splideProduct = new Splide('#splide-product', {
        //     autoWidth: true
        // });
        // splideProduct.mount();

        var elms = Array.from(document.getElementsByClassName( 'splide' ));

        elms.forEach((item, index) => {
            new Splide(item).mount();
        });
    });
} catch {

}