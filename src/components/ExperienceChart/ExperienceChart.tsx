import ReactApexChart from 'react-apexcharts';
import { jobsSeries } from '@data/jobs-series';

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
      // console.log({ opts });

      return toYear;
    }
  }
};

export function ExperienceChart() {
  return <ReactApexChart options={options} series={jobsSeries} type={'rangeBar'} height={400} />;
}
