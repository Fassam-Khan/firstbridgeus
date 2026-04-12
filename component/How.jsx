import React from 'react'

const How = () => {
  return (
    <div className='bg-[#f1f5f8] !py-4'>
        <div className="wrapper">
              {/* Heading  */}
              <div className='text-center' id='services'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='md:md:text-5xl text-3xl  font-extrabold '>HOW IT WORKS</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg'>
                        <p>Getting started is simple and straightforward</p>
                    </div>

                </div>
                {/* Card Cantainer  */}
                <div className='grid md:grid-cols-4 justify-items-center !mt-6 grid-cols-2 gap-3'>
                    {/* card  */}
                    <div className='bg-white shadow-2xl rounded-xl hover:scale-105 transition-transform md:h-[300px] flex flex-col gap-4   md:w-[250px] text-center items-center justify-center !p-4'>
                        <div className='w-15 h-15 bg-[#00457d] font-[Orbitron]  rounded-full text-4xl text-white font-bold flex justify-center items-center'>
                            1
                        </div>
                        <div className='font-[Orbitron] text-xl font-bold '>
                            <h4 className='text-sm md:text-lg'>Submit Your MC Number</h4>
                        </div>
                        <div>
                            <p>Provide your Motor Carrier number and basic information. Quick and easy setup process.</p>
                        </div>
                    </div>
                       {/* card  */}
                       <div className='bg-white shadow-2xl rounded-xl md:h-[300px] flex flex-col gap-4   md:w-[250px] text-center items-center justify-center !p-4'>
                        <div className='w-15 h-15 bg-[#00457d] font-[Orbitron]  rounded-full text-4xl text-white font-bold flex justify-center items-center'>
                            2
                        </div>
                        <div className='font-[Orbitron] text-xl font-bold '>
                            <h4 className='text-sm md:text-lg'>Get Assigned a Dispatcher</h4>
                        </div>
                        <div>
                            <p>We match you with an experienced dispatcher who understands your needs and preferences.</p>
                        </div>
                    </div>
                        {/* card  */}
                        <div className='bg-white shadow-2xl rounded-xl md:h-[300px] flex flex-col gap-4   md:w-[250px] text-center items-center justify-center !p-4'>
                        <div className='w-15 h-15 bg-[#00457d] font-[Orbitron]  rounded-full text-4xl text-white font-bold flex justify-center items-center'>
                            3
                        </div>
                        <div className='font-[Orbitron] text-xl font-bold '>
                            <h4 className='text-sm md:text-lg'>We Secure Profitable Loads</h4>
                        </div>
                        <div>
                            <p>Your dispatcher finds high-paying loads that match your equipment and desired routes.</p>
                        </div>
                    </div>
                        {/* card  */}
                        <div className='bg-white shadow-2xl rounded-xl md:h-[300px] flex flex-col gap-4   md:w-[250px] text-center items-center justify-center !p-4'>
                        <div className='w-15 h-15 bg-[#00457d] font-[Orbitron]  rounded-full text-4xl text-white font-bold flex justify-center items-center'>
                            4
                        </div>
                        <div className='font-[Orbitron] text-xl font-bold '>
                            <h4 className='text-sm md:text-lg'>You Drive and Get Paid</h4>
                        </div>
                        <div>
                            <p>Focus on safe driving while we handle negotiations, paperwork, and ensuring timely payment.</p>
                        </div>
                    </div>
  
                </div>
        </div>
      
    </div>
  )
}

export default How
