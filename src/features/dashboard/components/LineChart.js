import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import ReactEcharts from "echarts-for-react"
import { options } from "./lineChartOptions"
import { customStylesSelect } from '../../../components/ReactSelectStyle';
import Select from "react-select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart() {

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //   }

  // };

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: true,
  //       label: 'MAU',
  //       data: labels.map(() => { return Math.random() * 100 + 500 }),
  //       borderColor: '#000',
  //       backgroundColor: 'rgba(0, 0, 0, 0)',
  //     },
  //   ],
  // };

  return (
    <TitleCard title={"Montly Active Users (in K)"}>
      <div className="w-full h-[45vh]">
        {/* <Line data={data} options={options} /> */}
        <div className='flex justify-between'>
          <div className=''>
            <div className='flex'>
              <h1>$220,123k</h1>
              <p>total revenue</p>
            </div>
            <p>this year</p>
          </div>
          <div className='flex'>
            {/* add two select */}
            <Select
              name="dd"
              styles={customStylesSelect}
              className="react-select"
              classNamePrefix="select"
              options={
                [
                  { value: '01', label: '01' },

                ]
              }
              isSearchable
              placeholder='January, 2023 - December, 2023'
            />
            <Select
              name="dd"
              styles={customStylesSelect}
              className="react-select ml-4"
              classNamePrefix="select"
              options={
                [
                  { value: '01', label: '01' },

                ]
              }
              isSearchable
              placeholder='Month'
            />

          </div>
        </div>
        <ReactEcharts
          option={options}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </TitleCard>
  )
}


export default LineChart