import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiArrowLongLeft } from "react-icons/hi2";
import { VscCloudUpload } from "react-icons/vsc";



function Step1() {

  const onFileUpload = (files) => {
    console.log('file uploaded===> ', files)
    
  }

  return (
    <div className='p-5'>
      <div className='text-lg text-zinc-400'>Step 1</div>
      <h1 className='text-xl font-bold'>Please upload PDF file for ORC?</h1>
      <p className='text-zinc-400 w-5/6 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      <div className='mt-5 border-dotted  divide-x-4  divide-current attachment-box flex justify-center items-center'>



        <div className='flex-column'>
          <div className='flex-column items-center justify-center text-center '>
            <VscCloudUpload className='text-8xl text-slate-400 text-center m-auto mb-4' />

          </div>
          <input
            className="file-input file-input-bordered w-full max-w-xs"
            type="file"
            id="file"
            name="file"
            onChange={(e) => onFileUpload(e.target.files)}
          />
          {/* <div className='mt-4 '> Drop more file(s) here or browse</div> */}
          {/* <p className='text-xs'>Max file size: 200mb</p> */}
        </div>



      </div>

      <div className='mt-5'>
        <div className=''>Process</div>
        <p>68 % . 12 Secande remaning</p>
        <progress className="progress w-full"></progress></div>

      <div class="grid grid-cols-12 mt-3 ">
        <div class="col-span-10 p-5 ">

        </div>
        <div class="col-span-2 flex gap-4 justify-end items-center ">
          {/* <button className="btn btn-primary"> <HiArrowLongLeft /> Previous</button> */}
          <button className="btn btn-primary bg-blue-800">Next <MdOutlineArrowRightAlt /></button>
        </div>


      </div>
    </div>
  )
}

export default Step1