import { ExperienceChart } from '@components/ExperienceChart/ExperienceChart';
import { Fragment } from 'react';

export default function ThoughtsPage() {
  return (
    <Fragment>
      <h1>Projects</h1>
      <ul>
        <li>
          <a href=''>trafie.com</a>
        </li>
        <li>
          <a href=''>trackandfield.io</a>
        </li>
        <li>
          <a href=''>Athlead</a>
        </li>
      </ul>

      <ExperienceChart />
    </Fragment>
  );
}
