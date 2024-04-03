export async function addCats(){
    const catsElem = document.querySelectorAll(".cat");

    for(const element of catsElem){
        element.src = "./img/cat.jpg";
    }
}