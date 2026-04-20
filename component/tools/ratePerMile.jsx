"use client"
import React from 'react'
import { useState } from 'react'

const ratePerMile = () => {
  

  const submitHandler = ()=>{
console.log("hi")
  }
  return (
    <div className='flex flex-col shadow-2xl gap-4 w-full border-t-3 rounded-2xl bg-white border-[var(--primary-color)]  md:!p-8 !p-2'>
      {/* Heading  */}
      <div className='text-center flex flex-col gap-4'>
        <h2 className='font-[Orbitron] md:text-4xl text-xl text-[#004e89] font-bold'>💵 Rate Per Mile Calculator</h2>
        <p className='font-light'>Calculate your trucking rate per mile to evaluate every load before you accept it. Knowing your revenue per mile helps owner operators set profitable minimum rates, compare broker offers against market averages, and ensure every load covers fuel, expenses, and leaves a healthy profit margin. Use this free rate per mile calculator before accepting any load.

        </p>
      </div>

      {/* Calculator  */}
      <div className='bg-[#f8f9fa] !p-4 flex flex-col gap-4'>
        <p className='font-[Orbitron] text-[18px] font-bold text-[#004e89]'>Load Details</p>

        <div className='md:grid grid-cols-2 gap-4 w-full flex flex-col'>
          <div className='flex flex-col ga-3'>
            <label htmlFor="" className='font-bold'>Total Load Pay [$] *</label>
            <input type="number"  placeholder='3500' className='  border bg-white  !px-2 !py-2 outline-[var(--primary-color)] transition-all border-gray-200' />
          </div>
          {/* Right  */}
          <div className='flex flex-col ga-3 '>
            <label htmlFor="" className='font-bold '>Total Miles  [$] *</label>
            <input type="number" placeholder='1200' className=' border bg-white  !px-2 !py-2 outline-[var(--primary-color)] transition-all border-gray-200' />
          </div>
        </div>

        {/* Buttons  */}



      </div>

      
      <div className='flex gap-4'>
          <button onClick={submitHandler} className='bg-[#004e89] font-semibold !py-3 text-lg !px-2 text-white rounded cursor-pointer w-[400px] '>
            CALCULATE RATE 

          </button>
          <button className='bg-[#697a8f]  font-semibold text-lg !py-3 !px-2 text-white rounded cursor-pointer w-[400px] '>
            RESET 

          </button>
         
        </div>

    </div>
  )
}

export default ratePerMile
