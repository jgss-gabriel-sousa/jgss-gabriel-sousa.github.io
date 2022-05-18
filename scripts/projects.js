export function generateProjectsHTML(){
    let projectCard = document.getElementById("projects-cards");

    projects.forEach(project => {
        projectCard.innerHTML += `
        <div class="col">
            <div class="project-card col card shadow-sm">
                <div class="bg-secondary m-0 rounded shadow-mx">
                    `+imgHTML(project)+`
                </div>

                <div class="card-body">
                    <h3 class="card-text">${project.title}</h3>
                    <p class="card-text">${project.description}</p>
                    <div class="d-flex justify-content-between align-items-start">
                        <div class="container d-flex flex-column align-items-center btn-group">
                            <a class="btn btn-sm btn-secondary mb-1" role="button" href="https://github.com/jgss-gabriel-sousa/${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                            `+downloadBtnHTML(project)+`
                        </div>
                        `+tagsHTML(project)+`
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}
//<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

function imgHTML(project){
    if(project.img == "") 
        return `
        <figure class="mb-1">
            <img class="contain rounded" width="100%" height="225" src="https://cataas.com/cat">
            <figcaption class="small text-center text-light">Sem imagem disponível, mas fique com esse gatinho</figcaption>
        </figure>
        `;

    return `<img class="contain rounded" width="100%" height="225" src="${project.img}">`;
}

function tagsHTML(project){
    let tags = '<div class="container d-flex flex-column align-items-center">';
    project.tags.forEach(tag => {
        tags += `<small class="text-muted">${tag}</small>`;
    });
    tags += "</div>";

    return tags;
}

function downloadBtnHTML(project){
    if(project.download == "") return "";

    return `<a class="btn btn-sm btn-secondary mb-1" role="button" href="${project.download}" target="_blank" rel="noopener noreferrer">Download</a>`;
}

const projects = [
    {
        title: "BEngine",
        description: "Game Engine em C++",
        github: "BEngine",
        download: "",
        img: "",
        tags: [
            "C++",
            "SFML",
            "GameDev"
        ],
    },
    {
        title: "BWNet Simulator",
        description: "Simulador de Redes sem Fio e Algoritmos de Roteamento",
        github: "BWNet-Simulator",
        download: "https://github.com/jgss-gabriel-sousa/BWNet-Simulator/releases/download/v2.1/BWNet.Simulator.v2.1.zip",
        img: "https://camo.githubusercontent.com/6c20e9e550546c2a21ebcc1ceb3021cf919dc7bb2bf58c12e4b916e590e38da0/68747470733a2f2f692e696d6775722e636f6d2f5479425876556b2e706e67",
        tags: [
            "C++",
            "SFML",
            "GameDev"
        ],
    },
]