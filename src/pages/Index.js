import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Colin's personal website.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Colin Loftus</Link>
          </h2>
          <p>
            Junior at the University of Delaware&apos;s Lerner College of
            Business, majoring in Marketing with a minor in Sports Business
            Analytics.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, check out my{' '}
        <Link to="/resume">resume</Link>, and explore my{' '}
        <Link to="/projects">projects</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
