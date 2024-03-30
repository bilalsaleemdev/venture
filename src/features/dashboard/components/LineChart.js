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
    <TitleCard title={"Sales Revenues"}>
      <div className="w-full h-[50vh] ">
        {/* <Line data={data} options={options} /> */}
        <div className='flex justify-between '>
          <div className=' w-[30%] h-[20%]'>
            <div className='flex items-center' >
              <h1 className='text-5xl font-bold '>$220,123k</h1>
              <p className='text-[green] ml-[20px] bg-[#EEF5F0] rounded-2xl p-2 relative flex'><img src='./TrendUp.svg' className='pr-2'/>12%</p>
            </div>
            <p className='text-[gray] mt-[15px]'>this year</p>
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