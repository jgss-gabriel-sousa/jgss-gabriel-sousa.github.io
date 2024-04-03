import { projectsData } from "../data/projectsData.js";
import { filter } from "./filter.js";
import { accentsTidy, blankSpaceFix } from "./funcs.js";

export function generateProjectsHTML(){
    let projectCard = document.getElementById("projects-cards");
    projectCard.innerHTML = "";

    const projects = projectsData;

    const orderBy = document.getElementById("order-projects").value;
    
    sortProjects(projects, orderBy);

    projects.forEach(project => {
        let classes = "";

        project.tags.forEach(tags => {
            classes += accentsTidy(tags)+" ";
        });

        projectCard.innerHTML += `
        <div class="project-card col-11 ${blankSpaceFix(accentsTidy(project.title))} ${classes}">
            <div class="col card shadow-sm border-secondary">
                <div class="m-0 shadow-mx border-secondary">
                    <img class="project-image cover" width="100%" height="3em" src="${project.img}" onerror="src='./img/no-image-placeholder.webp'">
                </div>

                <div class="card-body">
                    <h3 class="card-text"><a class="link-dark animated-link" href="https://github.com/jgss-gabriel-sousa/${project.github}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
                    <p class="card-text">${project.description}</p>
                    <div class="project-link d-flex justify-content-between align-items-start">
                        <div class="container d-flex flex-column btn-group">
                            `+AccessOrDownloadBtn(project)+`
                            <a class="btn btn-sm btn-secondary mb-1 rounded" role="button" href="https://github.com/jgss-gabriel-sousa/${project.github}" target="_blank" rel="noopener noreferrer">Repositório</a>
                        </div>
                        `+tagsHTML(project)+`
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    filter();
}

function tagsHTML(project){
    let tags = '<div class="container d-flex flex-column align-items-center">';
    project.tags.forEach(tag => {
        tags += `<small class="text-muted project-card-tag" value="${tag}">${tag}</small>`;
    });
    tags += "</div>";

    return tags;
}

function AccessOrDownloadBtn(project){
    let html = "";

    if(project.site)
        html += `<a class="btn btn-sm btn-secondary mb-1 rounded" role="button" href="https://jgss-gabriel-sousa.github.io/${project.github}/" target="_blank" rel="noopener noreferrer">Acessar</a>`;

    if(project.download)
        html +=  `<a class="btn btn-sm btn-secondary mb-1 rounded" role="button" href="${project.download}" rel="noopener noreferrer">Download</a>`;

    return html;
}

function sortProjects(array, sortType){
    if(sortType == "az")
        array.sort((a, b) => a.title.localeCompare(b.title));
    else if(sortType == "za")
        array.sort((a, b) => b.title.localeCompare(a.title));
    else if(sortType == "popularity")
        array.sort((a, b) => b.popularity - a.popularity);
}