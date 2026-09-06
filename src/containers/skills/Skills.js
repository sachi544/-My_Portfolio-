import React, {useContext, useState} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {greeting, illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import resumeFile from "../greeting/resume.pdf";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [activeSkill, setActiveSkill] = useState(
    skillsSection.softwareSkills[0].skillName
  );
  const selectedSkill = skillsSection.softwareSkills.find(
    skill => skill.skillName === activeSkill
  );
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill
              activeSkill={activeSkill}
              onSkillSelect={setActiveSkill}
            />
            {selectedSkill && (
              <div className="skills-interactive-panel" aria-live="polite">
                <span className="skills-interactive-label">Currently exploring</span>
                <h2>{selectedSkill.skillName}</h2>
                <p>{selectedSkill.description}</p>
              </div>
            )}
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
            <div className="resume-actions">
              <a
                className="resume-action primary"
                href={resumeFile}
                download="Sachin-M-Bannur-Resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="resume-action secondary"
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
