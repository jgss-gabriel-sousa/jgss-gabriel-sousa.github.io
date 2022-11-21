import { hideNavbar } from "./scripts/navbar.js";
import { generateProjectsHTML } from "./scripts/projects.js";
import { addCats } from "./scripts/cats.js";
import { filter } from "./scripts/filter.js";

window.onscroll = () => hideNavbar();
document.getElementById("order-projects").onchange = () => {generateProjectsHTML(); addCats();};
document.getElementById("search-key").oninput = () => {filter();};
document.getElementById("order-tag").onchange = () => {filter();};

generateProjectsHTML();
addCats();