import React from 'react'

const Weekly = () => {
    return (
        <div className='bg-[var(--secondary-color)] !py-6'>
            <div className="wrapper flex flex-col gap-4 justify-center items-center">
                {/* Heading  */}
                <div className='text-center text-white' id='' >
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='md:md:text-5xl text-3xl  font-extrabold te '>Weekly Revenue Example</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg'>
                        <p>See the real financial impact of professional dispatching</p>
                    </div>

                </div>

                {/* card  */}
                <div>
                    <div className='border-2 border-[var(--primary-color)] rounded-2xl text-center text-white md:!p-8 !p-4 flex flex-col gap-6 items-center  md:w-[800px] w-full'>
                        <h2 className='md:text-3xl text-[var(--primary-color)] font-bold font-[Orbitron] !mb-4'>
                            Typical Owner Operator Weekly Revenue
                        </h2>
                        <div className='w-full flex justify-between border-b border-gray-500 !pb-2 '>
                            <p className='md:text-lg'>Gross Load Revenue:</p>
                            <p className='text-[#ffd23f] font-bold'>$7,000</p>
                        </div>
                        <div className='w-full flex justify-between border-b border-gray-500 !pb-2 '>
                            <p className='md:text-lg'>Fuel Cost:</p>
                            <p className='text-[#ffd23f] font-bold'>-$2,100</p>
                        </div>
                        <div className='w-full flex justify-between border-b border-gray-500 !pb-2 '>
                            <p className='md:text-lg'>Dispatch Fee (6%):</p>
                            <p className='text-[#ffd23f] font-bold'>-$420</p>
                        </div>
                        <div className='bg-[var(--primary-color)] h-0.5 w-full'>
                        </div>
                        <div className='w-full flex justify-between !pb-2 '>
                            <p className='md:text-lg font-bold'>Estimated Net Revenue:</p>
                            <p className='text-[var(--primary-color)] text-lg font-bold'>$4,480</p>
                        </div>

                    </div>
                    <div className='text-white w-[600px] text-center w-full !mt-4'>
                        <p>*Example based on typical week. Actual revenue varies by equipment type, routes, and market conditions.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weekly
