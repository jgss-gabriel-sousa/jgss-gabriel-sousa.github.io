let prevScrollpos = window.pageYOffset;
let currentScrollPos;

export function hideNavbar(){
    currentScrollPos = window.pageYOffset;
    
    if(prevScrollpos > currentScrollPos){
        document.getElementById("header").style.top = "0";
    }
    else{
        document.getElementById("header").style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
}