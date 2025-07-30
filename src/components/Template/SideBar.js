import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Colin Loftus"
        style={{ width: '150px', borderRadius: '8px' }}
      />
      <header>
        <h2>Colin Loftus</h2>
        <p>
          <a href="mailto:colinploftus@gmail.com">colinploftus@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Colin Loftus.  I’m from a very boring town in North New Jersey called Chatham.
        I am currently a student at the University of Delaware and am a Business Undeclared major
        though I am very interested in exploring the marketing world.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Made by Rohan Malhotra <Link to="/">rohanm.org</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
