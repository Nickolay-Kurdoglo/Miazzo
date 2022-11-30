import { ModalComponent } from "./components/modal.component.js";

import { TextFieldComponent } from "./components/text_field.component.js";

import { CounterComponent } from "./components/counter.component.js";

import { OrderDataComponent } from "./components/order_data.component.js";

import { HeaderComponent } from "./components/header.component.js";

import { AccordionComponent } from "./components/accordion.component.js";

import { FilterComponent } from "./components/filters.component.js";

try {
    new ModalComponent("#modal");
} catch {

}

try {
    new TextFieldComponent(".text_field")
} catch {

}

try {
    new CounterComponent(".counter")
} catch {

}

try {
    new OrderDataComponent(".order_data")
} catch {

}

try {
    new HeaderComponent(".header")
} catch {

}

try {
    new AccordionComponent(".accordion-list")
} catch {

}


try {
    new FilterComponent(".js-filters")
} catch {

}