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
    new ModalComponent(".modal");
} catch {

}

try {
    document.addEventListener('DOMContentLoaded', function () {
        var elms = Array.from(document.getElementsByClassName('splide'));

        elms.forEach((item, index) => {

            if (item.getAttribute("id") === "splide-product") {
                var splide = new Splide('#splide-product', {
                    pagination: false,
                });


                var thumbnails = document.getElementsByClassName('thumbnail');
                var current;


                for (var i = 0; i < thumbnails.length; i++) {
                    initThumbnail(thumbnails[i], i);
                }


                function initThumbnail(thumbnail, index) {
                    thumbnail.addEventListener('click', function () {
                        splide.go(index);
                    });
                }


                splide.on('mounted move', function () {
                    var thumbnail = thumbnails[splide.index];


                    if (thumbnail) {
                        if (current) {
                            current.classList.remove('is-active');
                        }


                        thumbnail.classList.add('is-active');
                        current = thumbnail;
                    }
                });


                splide.mount();
            } else {
                new Splide(item).mount();
            }
        });
    });
} catch {

}

try {
    document.querySelector(".js-copy-path").addEventListener("click", function () {
        const pagePath = window.location.href;

        this.classList.add("success");

        setTimeout(() => {
            this.classList.remove("success");
        }, 500);

        try {
            navigator.clipboard.writeText(pagePath);
        } catch {
            console.warn("Not success!");
        }

    });
} catch {

}

