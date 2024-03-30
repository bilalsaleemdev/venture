import React from 'react';

function InputSearch() {
  return (
    <>
        <div className="bg-[] flex items-center border px-[12px] cursor-pointer">
        <span className="h-[40px] w-[40px] flex items-centerjustify-center"><img src="/images/dashboard-table-icon-1.svg" alt="" className="w-[22px]" /></span>
            <input type="search" name="" id="" placeholder="Search" className=" h-[40px] placeholder-text-[10px] px-[8px]" style={{outline:"none"}}/>
            <span className="h-[25px] w-[25px] flex items-center-justify-center mr-[6px]"><img src="/images/dashboard-table-icon2.svg" alt="" /></span>
            <span className="h-[25px] w-[25px] flex items-center-justify-center "><img src="/images/dashboard-table-icon3.svg" alt="" /></span>
        </div>
    </>
  );
}

export default InputSearch;
