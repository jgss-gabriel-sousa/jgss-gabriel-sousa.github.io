import { hideNavbar } from "./scripts/navbar.js";
import { generateProjectsHTML } from "./scripts/projects.js";
import { addCats } from "./scripts/cats.js";
import { accentsTidy } from "./scripts/funcs.js";

window.onscroll = () => hideNavbar();
document.getElementById("order-projects").onchange = () => {generateProjectsHTML(); addCats();};
document.getElementById("search-key").oninput = () => {filter();};

generateProjectsHTML();
addCats();


function filter(){
    const array = document.querySelectorAll(".project-card");
    const filterKey = accentsTidy(document.getElementById("search-key").value);
    
    for(let i = 0; i < array.length; i++){    
        for(let j = 0; j < array[i].classList.length; j++){
            const element = array[i].classList[j];
            
            if(accentsTidy(element).includes(filterKey)){
                array[i].classList.remove("hidden");
                break;
            }
            else{
                array[i].classList.add("hidden");
            }
        }
    };
}