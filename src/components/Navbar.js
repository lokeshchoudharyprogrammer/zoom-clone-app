import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useScrollYPosition } from "react-use-scroll-position";
import "../styles/navbar.css";

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <Container>
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${menuOpen ? " nav-open" : ""
          }`}
      >
        <div className="nav-content">
          <div className="nav-logo">Felisity</div>

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <a className="nav-link" href={link.href} key={i}>
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </a>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </Container>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
   
    { title: "Contact", href: "#contact" }
  ]
};

export default Navbar;
