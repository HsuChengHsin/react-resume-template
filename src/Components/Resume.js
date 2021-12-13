import React from "react";

const Resume = ({ data }) => {
  const { skillMessage, education, work, skills } = data;

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education.map(({ school, degree, graduated, description }) => (
                <div key={school}>
                  <h3>{school}</h3>
                  <p className="info">
                    {degree} <span>&bull;</span>
                    <em className="date">{graduated}</em>
                  </p>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work.map(({ company, description, years, title }) => (
            <div key={company}>
              <h3>{company}</h3>
              <p className="info">
                {title}
                <span>&bull;</span> <em className="date">{years}</em>
              </p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillMessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills.map(({ name, level }) => (
                <li key={name}>
                  <span
                    style={{ width: level }}
                    className={`bar-expand ${name.toLowerCase()}`}
                  />
                  <em>{name}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
