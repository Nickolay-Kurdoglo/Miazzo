import { ModalComponent } from "./components/modal.component.js";

import { TextFieldComponent } from "./components/text_field.component.js";

import { CounterComponent } from "./components/counter.component.js";

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