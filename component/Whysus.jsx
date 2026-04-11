import React from 'react'

const Whysus = () => {
    return (
        <div className='bg-[var(--secondary-color)] p-4'>
            <div className="wrapper">
                {/* Heading  */}
                <div className='text-center' id='whyus'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='md:text-5xl text-2xl font-extrabold text-white '>Why Choose First Bridge?</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg text-gray-300'>
                        <p>The bridge between you and exceptional profits</p>
                    </div>

                </div>

                <div className='grid md:grid-cols-4  grid-cols-2 md:gap-6 gap-3 !mt-6'>
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            Industry Expertise
                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>Years of experience in the trucking industry with deep knowledge of lanes, rates, and market trends across all 48 states.    </p>
                    </div>
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            No Hidden Fees
                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>Transparent pricing with straightforward percentage-based fees. What you see is what you pay--no surprises.    </p>
                    </div>
               
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            Technology Driven
                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>Advanced load matching systems and real-time tracking tools that give you the competitive edge you need.   </p>
                    </div>
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            Personalized Service

                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>You're not just a number. We learn your preferences, routes, and goals to provide customized dispatching solutions.
                        </p>
                    </div>
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            Quick Onboarding

                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>Get on the road fast with our streamlined setup process. Start hauling profitable loads within 48 hours.

                        </p>
                    </div>
                    {/* Card  */}
                    <div className="why-card flex flex-col flex-wrap bg-[#161a32] border border-[var(--primary-color)] gap-3 !p-4 ">
                        <h4 className='text-[#ffd23f] text-bold font-[Orbitron] md:text-2xl text-lg'>
                            Proven Results

                        </h4>
                        <p className='text-gray-300 md:text-lg text-sm'>Our drivers average 15-25% higher revenue per mile compared to self-dispatching. Results that speak for themselves.

                        </p>
                    </div>





                </div>
            </div>

        </div>
    )
}

export default Whysus
