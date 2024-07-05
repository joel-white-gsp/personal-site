import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>JOEL WHITE</h2>
        <p><a href="mailto:joel.white.gsp@gmail.com">joel.white.gsp@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Computer expert with exceptional customer service and
        technical support skills. Background in information systems and
        project management working for SpaceX, Verizon, Texas Instruments,
        and US Army veteran. Experience includes full-stack software development,
        hardware/software automation, SCADA, telecommunication and
        information network technology. B.S. in programming and
        master’s in information systems management with project management focus.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Joel White <Link to="/">joel-white.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
