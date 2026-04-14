"use client"
import React from 'react'
import Logo from './Logo'
import { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()

    }
    return (
        <div className='relative bg-[var(--primary-color)] text-white md:!p-6'>
            <div className="wrapper flex justify-between items-center flex-wrap">
                {/* Left Div  */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-4xl font-bold'>Ready to get started?</h4>
                        <p className='text-lg'>Contact us in any convenient way to order services or get detailed information on your question.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            +92 3142351286
                        </div>
                        <div>
                            <a href="mailto:info@firstbridgedispatch.com">info@firstbridgedispatch.com</a>
                        </div>
                    </div>
                </div>

                {/* Right Div  */}
                <div>
                    <form onSubmit={submitHandler} className='bg-white md:w-[450px] w-[100%] shadow-2xl text-[var(--secondary-color)] rounded !p-6'>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="firstname" className=' font-semibold text-lg'>FIRST NAME*</label>
                                <div className='group'>
                                    <input type="text" className='border-b outline-none focus:border-[var(--primary-color)] transition-all' />
                                    <p className=' text-red-400 text-sm !mt-1 font-semibold'>Please complete this required field</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="lastname" className=' font-semibold text-lg'>LAST NAME*</label>
                                <input type="text" className='border-b outline-none' />
                            </div>

                        </div>

                        <button>Sumbit</button>
                    </form>

                </div>
            </div>



        </div>

    )
}

export default Contact
