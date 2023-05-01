import { skillsData } from "../data/skillsData.js"
import { accentsTidy, blankSpaceFix } from "./funcs.js";

export function generateSkillsHTML(){
    let skillCard = document.getElementById("skills-cards");
    skillCard.innerHTML = "";

    const skills = skillsData;

    skills.forEach(skill => {
        skillCard.innerHTML += `
        <div class="skills-card">
            <div class="skills-card-body text-center">
                <img class="mb-2" width="64px" src="img/icons/${blankSpaceFix(accentsTidy(skill))}.png">
                <p class="card-text">${skill}</p>
            </div>
        </div>
        `;
    });
}