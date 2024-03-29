import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiArrowLongLeft } from "react-icons/hi2";

function Step3() {
  return (
    <div className='p-5'>
      <div className='text-lg text-zinc-400'>Step 3</div>
      <h1 className='text-xl font-bold'>Model Selection</h1>
      <p className='text-zinc-400 w-5/6 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

      <div class="grid grid-cols-12  gap-4 mt-5">
      <div class="col-span-9"></div>
      <div class="col-span-3">
      <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Model Selection</option>
  <option>Model Selection</option>
  <option>Model Selection</option>
</select>
      </div>
        <div class="col-span-12 mt-3">
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        
      
      </div>
      <div class="grid grid-cols-12 mt-3 ">
        <div class="col-span-10 p-5 ">
        </div>
        <div class="col-span-2 flex gap-4 justify-end items-center mt-4 ">
          <button className="btn btn-primary bg-blue-800"> <HiArrowLongLeft/> Previous</button>
          <button className="btn btn-primary bg-blue-800">Next <MdOutlineArrowRightAlt /></button>
        </div>


      </div>
    </div>
  )
}

export default Step3