import { hideNavbar } from "./scripts/navbar.js";
import { generateSkillsHTML } from "./scripts/skills.js";
import { generateProjectsHTML } from "./scripts/projects.js";
import { images } from "./scripts/images.js";
import { addCats } from "./scripts/cats.js";
import { filter } from "./scripts/filter.js";

document.getElementById("order-projects").onchange = () => {generateProjectsHTML(); addCats();};
document.getElementById("search-key").oninput = () => filter();
document.getElementById("order-tag").onchange = () => filter();

generateSkillsHTML();
generateProjectsHTML();
images();
addCats();
hideNavbar();