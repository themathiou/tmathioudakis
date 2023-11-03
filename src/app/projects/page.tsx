import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Fragment } from 'react';

export default function ProjectsPage() {
  const DynamicExperienceChart = dynamic(() => import('@components/ExperienceChart/ExperienceChart'), { ssr: false });

  return (
    <Fragment>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href='#'>trafie.com</Link>
        </li>
        <li>
          <Link href='#'>trackandfield.io</Link>
        </li>
        <li>
          <Link href='#'>Athlead</Link>
        </li>
      </ul>

      <DynamicExperienceChart />
    </Fragment>
  );
}
