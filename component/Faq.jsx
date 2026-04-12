import React from 'react'
import { Accordionpage } from './Accordionpage'

const Faq = () => {
    return (
        <div className='bg-[#f0f4f8] !py-6'>
            <div className="wrapper">
                {/* Heading  */}
                <div className='text-center' id='faq'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='md:md:text-5xl text-3xl  font-extrabold '>FREQUENTLY ASKED QUESTIONS</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg'>
                        <p>Everything owner operators need to know about First Bridge Dispatch Services and trucking</p>
                    </div>

                </div>

                {/* Faq   */}
                <div className='flex justify-center !mt-16 w-full'>
                <Accordionpage/>

                </div>

            
            </div>

        </div>
    )
}

export default Faq
