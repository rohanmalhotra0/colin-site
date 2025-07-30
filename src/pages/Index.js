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
            Sophmore studying at the University of Delaware, majoring in Marketing.
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
