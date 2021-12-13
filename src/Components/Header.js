import React from "react";

const NAVS = [
  { label: "Home", hash: "#home", current: true },
  { label: "About", hash: "#about", current: false },
  { label: "Resume", hash: "#resume", current: false },
  { label: "Works", hash: "#portfolio", current: false },
  { label: "Testimonials", hash: "#testimonials", current: false },
  { label: "Contact", hash: "#contact", current: false },
];

const Header = ({ data }) => {
  const {
    name,
    occupation,
    description,
    address: { city },
    social,
  } = data;

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          {NAVS.map(({ label, hash, current }) => (
            <li className={current && "current"} key={label}>
              <a className="smoothscroll" href={hash}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url}>
                  <i className={network.className} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
};

export default Header;
