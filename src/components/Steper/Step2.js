import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { HiArrowLongLeft } from "react-icons/hi2";

function Step2() {
  return (
    <div className='p-5'>
      <div className='text-lg text-zinc-400'>Step 2</div>
      <h1 className='text-xl font-bold'>Process</h1>
      <p className='text-zinc-400 w-5/6 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

      <div class="grid grid-cols-12  gap-4">
        <div class="col-span-4">
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <th >Company name: </th>
                  <td>ABC</td>

                </tr>
                {/* row 2 */}
                <tr>
                  <th>Address: </th>
                  <td>1234 Yur Street</td>

                </tr>
                {/* row 3 */}
                <tr>
                  <th>City: </th>
                  <td>Califonia</td>

                </tr>

                <tr>
                  <th>Tel number:  </th>
                  <td>1-888-123-8910</td>

                </tr>
                <tr>
                  <th>Oli: </th>
                  <td>2025      4568     8965</td>

                </tr>
                <tr>
                  <th>Gas: </th>
                  <td>1236       4895     7896</td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-6">
          <div className='mt-5 border-dotted  divide-x-4  divide-current attachment-box1 flex  justify-center items-center'>
            <img className='image-height' src="/pdf.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-3 ">
        <div class="col-span-10 p-5 ">
        </div>
        <div class="col-span-2 flex gap-4 justify-end items-center mt-4 ">
          <button className="btn btn-primary bg-blue-800"> <HiArrowLongLeft /> Previous</button>
          <button className="btn btn-primary bg-blue-800">Next <MdOutlineArrowRightAlt /></button>
        </div>


      </div>
    </div>
  )
}

export default Step2