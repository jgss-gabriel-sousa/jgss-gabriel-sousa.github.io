import { hideNavbar } from "./scripts/navbar.js";
import { generateProjectsHTML } from "./scripts/projects.js";
import { addCats } from "./scripts/cats.js";

window.onscroll = () => {
    hideNavbar();
}

generateProjectsHTML();
addCats();