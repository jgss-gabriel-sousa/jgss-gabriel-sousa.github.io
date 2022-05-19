export function generateProjectsHTML(){
    let projectCard = document.getElementById("projects-cards");

    projects.forEach(project => {
        projectCard.innerHTML += `
        <div class="col d-flex">
            <div class="project-card col card shadow-sm">
                <div class="bg-secondary m-0 rounded shadow-mx">
                    `+imgHTML(project)+`
                </div>

                <div class="card-body">
                    <h3 class="card-text"><a class="link-dark no-decoration" href="https://github.com/jgss-gabriel-sousa/${project.github}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
                    <p class="card-text">${project.description}</p>
                    <div class="d-flex justify-content-between align-items-start">
                        <div class="container d-flex flex-column align-items-center btn-group">
                            `+downloadBtnHTML(project)+`
                            `+siteBtnHTML(project)+`
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
            <img class="contain rounded cat" width="100%" height="225"">
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

    return `<a class="btn btn-sm btn-secondary mb-1 rounded" role="button" href="${project.download}" rel="noopener noreferrer">Download</a>`;
}

function siteBtnHTML(project){
    if(!project.site) return "";

    return `<a class="btn btn-sm btn-secondary mb-1 rounded" role="button" href="https://jgss-gabriel-sousa.github.io/${project.github}/" target="_blank" rel="noopener noreferrer">Acessar</a>`;
}

const projects = [
    {
        title: "PokéDex",
        description: "Site com uma PokéDex que obtém dados de API's externas",
        github: "PokeDex",
        download: "",
        site: true,
        img: "https://user-images.githubusercontent.com/42483024/169171404-3268f80e-e1e3-4892-a7de-f9e5b39c9318.jpg",
        tags: [
            "JavaScript",
            "Front-End",
            ""
        ],
    },
    {
        title: "Heroes and Monsters - Bestiário",
        description: "Bestiário de um sistema de RPG de Mesa",
        github: "Heroes-and-Monsters-Bestiario",
        download: "",
        site: true,
        img: "",
        tags: [
            "JavaScript",
            "Front-End",
            ""
        ],
    },
    {
        title: "BEngine",
        description: "Game Engine em C++",
        github: "BEngine",
        download: "",
        site: false,
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
        site: false,
        img: "https://camo.githubusercontent.com/6c20e9e550546c2a21ebcc1ceb3021cf919dc7bb2bf58c12e4b916e590e38da0/68747470733a2f2f692e696d6775722e636f6d2f5479425876556b2e706e67",
        tags: [
            "C++",
            "SFML",
            "GameDev"
        ],
    },
    {
        title: "Ano Novo",
        description: "Contagem Regressiva para o Ano Novo",
        github: "New-Year-Countdown",
        download: "",
        site: true,
        img: "",
        tags: [
            "JavaScript",
            "Front-End",
            ""
        ],
    },
]