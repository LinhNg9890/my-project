'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any; // could improve with proper typing
};

export default function Chart({ data }: Props) {
  return (
    <div className="max-w-md">
      <Bar data={data} />
    </div>
  );
}
