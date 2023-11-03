'use client';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <h1>
        Hello 👋🏼, <br />I am Theodore Mathioudakis
      </h1>
      <article>
        I am a software engineer, located in Greece. I have a decade experience in Software Engineer, starting from bla
        bla bla
      </article>

      {/* <ExperienceChart /> */}

      <h2>Contact details</h2>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>

      <footer>©️ Theodoros Mathioudakis</footer>
    </Fragment>
  );
}
