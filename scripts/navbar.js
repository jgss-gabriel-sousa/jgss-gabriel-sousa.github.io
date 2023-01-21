export function hideNavbar(){
    const header = document.getElementById("header");
    let prevScrollpos = window.pageYOffset;
    let currentScrollPos;

    prevScrollpos = currentScrollPos;

    window.addEventListener("scroll", () => {
        currentScrollPos = window.pageYOffset;
        
        if(prevScrollpos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }

        prevScrollpos = currentScrollPos;
    });
}