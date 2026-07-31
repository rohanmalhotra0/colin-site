import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Stats = () => (
  <Main
    title="Research / Publications"
    description="Research and published work on social media sentiment and financial markets."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Research & Publications</Link>
          </h2>
          <p>Research I have contributed to and published work</p>
        </div>
      </header>
      <h3>📄 Publications</h3>
      <ul>
        <li>
          <strong>
            <a
              href="https://vtechworks.lib.vt.edu/items/046554a1-c4b0-46b0-b674-f4d62a490c27"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit Data in Quantitative Financial Models
            </a>
          </strong>{' '}
          — Feb 2025
          <br />
          Explores Reddit-driven sentiment post-GME/AMC and its implications on
          market volatility.
        </li>
      </ul>
    </article>
  </Main>
);

export default Stats;
