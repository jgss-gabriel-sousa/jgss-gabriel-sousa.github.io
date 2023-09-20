export function hideNavbar(){
    const header = document.getElementById("header");
    let YPos;

    window.addEventListener("scroll", () => {
        YPos = pageYOffset + window.innerHeight/4 + 72;
        
        const home = document.querySelector("#home").offsetTop;
        const about = document.querySelector("#about-me").offsetTop;
        const projects = document.querySelector("#my-projects").offsetTop;
        const contacts = document.querySelector("footer").offsetTop;

        console.log(YPos)
        console.log("home: "+home)
        console.log("about: "+about)
        console.log("projects: "+projects)
        console.log("contacts: "+contacts)

        document.querySelectorAll("#navbarHeader > div > ul > li").forEach(e => {
            e.classList.remove("nav-selected");
        });

        if(YPos > contacts){
            document.querySelector("#navbarHeader > div > ul > li:nth-child(4)").classList.add("nav-selected");
        }
        else if(YPos > projects){
            document.querySelector("#navbarHeader > div > ul > li:nth-child(3)").classList.add("nav-selected");
        }
        else if(YPos > about){
            document.querySelector("#navbarHeader > div > ul > li:nth-child(2)").classList.add("nav-selected");
        }
        else if(YPos >= home){
            document.querySelector("#navbarHeader > div > ul > li:nth-child(1)").classList.add("nav-selected");
        }
    });
}