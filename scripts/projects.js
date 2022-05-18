export function generateProjectsHTML(){
    let projectCard = document.getElementById("projects-cards");

    projects.forEach(project => {
        projectCard.innerHTML += `
            <div class="col">
                <div class="project-card col card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div class="card-body">
                        <h3 class="card-text">${project.title}</h3>
                        <p class="card-text">${project.description}</p>
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="container d-flex flex-column align-items-start btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary mb-1"><a src="${project.github}">GitHub</a></button>
                            </div>
                            `+tagsHTML(project)+`
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function tagsHTML(project){
    let tags = '<div class="container d-flex flex-column align-items-center">';
    project.tags.forEach(tag => {
        tags += `<small class="text-muted">${tag}</small>`;
    });
    tags += "</div>";

    return tags;
}

const projects = [
    {
        title: "BEngine",
        description: "Game Engine em C++",
        github: "google.com",
        tags: [
            "C++",
            "SFML",
            "GameDev"
        ],
    },
    {
        title: "BWNet Simulator",
        description: "Simulador de Redes sem Fio e Algoritmos de Roteamento",
        github: "youtube.com",
        tags: [
            "C++",
            "SFML",
            "GameDev"
        ],
    },
]