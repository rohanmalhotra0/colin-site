import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Colin Loftus" />
      </Link>
      <header>
        <h2>Colin Loftus</h2>
        <p>
          <a href="mailto:colinlof@udel.edu">colinlof@udel.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Colin. I&apos;m a junior at the University of
        Delaware&apos;s Lerner College of Business majoring in Marketing with a
        minor in Sports Business Analytics. I&apos;m chasing a career where the
        business side of sports meets the fans.
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
