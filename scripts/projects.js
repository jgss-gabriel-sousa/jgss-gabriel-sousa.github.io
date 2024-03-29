import { projectsData } from "../data/projectsData.js";
import { filter } from "./filter.js";
import { accentsTidy, blankSpaceFix } from "./funcs.js";

async function getProjectsDataGithub(){
    let projGitAPI;
    
    projectsData.forEach(async project => {
        try{
            const res = await fetch("https://api.github.com/repos/jgss-gabriel-sousa/"+project.github);
            projGitAPI = await res.json();
            
            project.popularity = projGitAPI.stargazers_count * projGitAPI.watchers_count + size;
        }
        catch(error){
            return 0;
        }
    });
}
await getProjectsDataGithub();

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
                    `+imgHTML(project)+`
                </div>

                <div class="card-body">
                    <h3 class="card-text"><a class="link-dark animated-link" href="https://github.com/jgss-gabriel-sousa/${project.github}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
                    <p class="card-text">${project.description}</p>
                    <div class="project-link d-flex justify-content-between align-items-start">
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

    filter();
}

function imgHTML(project){
    if(project.img == "") 
        return `
        <figure class="mb-1">
            <img class="cat cover" width="100%" height="200">
            <figcaption class="px-2 small text-center">Imagem indisponível :(<br>Mas aqui tem um gatinho fofo para te distrair :)</figcaption>
        </figure>
        `;

    return `<img class="project-image cover" width="100%" height="225" src="${project.img}" alt="${project.title}">`;
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

function sortProjects(array, sortType){
    if(sortType == "az")
        array.sort((a, b) => a.title.localeCompare(b.title));
    else if(sortType == "za")
        array.sort((a, b) => b.title.localeCompare(a.title));
    else if(sortType == "popularity")
        array.sort((a, b) => b.popularity - a.popularity);
}