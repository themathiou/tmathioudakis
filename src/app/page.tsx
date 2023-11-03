'use client';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <h1>
        Hello 👋🏼, <br />I am Theodore Mathioudakis
      </h1>
      <p>
        I am a software engineer, located in Greece. I have a decade experience in Software Engineer. Both corporate and
        freelance world
      </p>

      {/* <ExperienceChart /> */}

      <h2>Contact details</h2>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
    </Fragment>
  );
}
