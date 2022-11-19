import { DropdownComponent } from "./components/dropdown.js";

import { HeaderComponent } from "./components/header.component.js";

import { ModalComponent } from "./components/modal.component.js";

import {CategoryTabsComponent} from "./components/category-tabs.component.js";

let $header = '';

try {
    new DropdownComponent(".dropdown")
} catch {

}

try {
    $header = new HeaderComponent("#header");
} catch {

}

try {
    new ModalComponent("#modal");
} catch {

}

try {
    new CategoryTabsComponent("#categories")
} catch {

}