import { accentsTidy, blankSpaceFix } from "./funcs.js";

export function filter(){
    const array = document.querySelectorAll(".project-card");
    const searchKey = blankSpaceFix(accentsTidy(document.getElementById("search-key").value));
    const orderTag = document.getElementById("order-tag").value;
    const totalFilters = 2;
    console.log(orderTag == "all")
    
    for(let i = 0; i < array.length; i++){    
        let filtersOK = 0;


        if(searchKey == "" || array[i].classList[2].includes(searchKey)){
            filtersOK++;
        }

        if(orderTag == "all"){
            filtersOK++;
        }
        else{
            for(let j = 0; j < array[i].classList.length; j++){
                const elClass = array[i].classList[j];
                
                if(orderTag == "all" || elClass == orderTag){
                    filtersOK++;
                }
            }
        }

        if(filtersOK == totalFilters){
            array[i].classList.remove("hidden");
        }
        else{
            array[i].classList.add("hidden");
        }
    }
}