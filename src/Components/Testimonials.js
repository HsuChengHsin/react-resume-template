import React from "react";

const Testimonials = ({ data }) => {
  const { testimonials } = data;

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1 />
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {testimonials.map(({ user, text }) => (
                <li key={user}>
                  <blockquote>
                    <p>{text}</p>
                    <cite>{user}</cite>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
