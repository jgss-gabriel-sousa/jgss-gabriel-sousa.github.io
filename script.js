import { hideNavbar } from "./scripts/navbar.js";
import { generateProjectsHTML } from "./scripts/projects.js";

window.onscroll = () => {
    hideNavbar();
}

generateProjectsHTML();