export async function addCats(){
    const catsElem = document.querySelectorAll(".cat");

    for(const element of catsElem){
        element.src = await getCat();
    }
}

async function getCat(){
    /*
    ########## API broken down ##########

    try{
        const res = await fetch("https://aws.random.cat/meow");
        const img = await res.json();
        
        return img.file;
    }
    catch(error){
        return "./img/cat.jpg";
    }
    */
    
    return "./img/cat.jpg";
}