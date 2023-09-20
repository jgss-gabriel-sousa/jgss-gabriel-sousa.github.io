export function images(){
    document.querySelectorAll(".project-image").forEach(e => {
        e.addEventListener("click", popup);
    });
}

function popup(){
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("modal-caption");
    
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    modal.onclick = function() { 
        modal.style.display = "none";
    }
}