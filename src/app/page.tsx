'use client';
// import Image from 'next/image';
import { jobsSeries } from './data/jobs-series';
import styles from './page.module.css';
import ReactApexChart from 'react-apexcharts';

export default function Home() {
  const options: any = {
    chart: {
      height: 400,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        rangeBarGroupRows: true
      }
    },
    colors: [
      '#008FFB',
      '#00E396',
      '#FEB019',
      '#FF4560',
      '#775DD0',
      '#3F51B5',
      '#546E7A',
      '#D4526E',
      '#8D5B4C',
      '#F86624',
      '#D7263D',
      '#1B998B',
      '#2E294E',
      '#F46036',
      '#E2C044'
    ],
    fill: {
      type: 'solid'
    },
    xaxis: {
      type: 'datetime'
    },
    legend: {
      hidden: true
    },
    tooltip: {
      custom: (opts: any) => {
        const fromYear = new Date(opts.y1).getFullYear();
        const toYear = new Date(opts.y2).getFullYear();
        // const values = opts.ctx.rangeBar.getTooltipValues(opts);

        return `${opts.x1} ${fromYear} - ${toYear}`;
      }
    }
  };

  return (
    <main className={styles.main}>
      <section>
        <h1>Hi, I'm Theodore Mathioudakis</h1>
        <p>I'm a software engineer, located in Greece.</p>
        <p>
          I have a decade experience in Software Engineer, starting from SQL and Java and I end up in the front end
          building complex web and mobile apps, and leading agile full stack teams.
        </p>
        <p>I'm open to work as part of a great team or I can deliver for you some</p>
      </section>

      <section style={{ width: '90vw' }}>
        <ReactApexChart options={options} series={jobsSeries} type={'rangeBar'} height={400} />
      </section>

      <section>
        <h1>Contact details</h1>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </section>

      <footer>©️ Theodoros Mathioudakis</footer>
    </main>
  );
}
