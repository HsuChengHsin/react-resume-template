import React from "react";

const About = ({ data }) => {
  const {
    name,
    image,
    bio,
    address: { city, zip },
    phone,
    email,
  } = data;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={`images/${image}`}
            alt="Angus Hsu Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <div className="my-10">
            <h2>About Me</h2>
            <p>{bio}</p>
          </div>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="/resume.pdf" className="button" download>
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
