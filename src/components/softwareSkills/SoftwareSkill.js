import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill({activeSkill, onSkillSelect}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={
                  activeSkill === skills.skillName
                    ? "software-skill-inline active"
                    : "software-skill-inline"
                }
                name={skills.skillName}
                onClick={() => onSkillSelect(skills.skillName)}
                onKeyDown={event => {
                  if (event.key === "Enter" || event.key === " ") {
                    onSkillSelect(skills.skillName);
                  }
                }}
                role="button"
                tabIndex="0"
                aria-pressed={activeSkill === skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
