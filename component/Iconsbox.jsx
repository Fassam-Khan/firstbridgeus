import React from 'react'

const Iconsbox = () => {
    return (
        <div className='bg-[var(--secondary-color)]'>
            <div className='wrapper grid md:grid-cols-4 grid-cols-2 gap-4'>
                {/* Box  */}
                <div className='text-white flex flex-col gap-2 items-center    '>
                    <h1 className="bg-gradient-to-r font-[Orbitron] md:text-6xl text-3xl from-[#fa9e13] to-[#ffa25b]  bg-clip-text text-transparent  font-bold">
                        24/7
                    </h1>
                    <div className='md:text-2xl font-semibold text-gray-300'>
                        <p className='text-sm md:text-2xl' >SUPPORT</p>
                    </div>

                </div>
                    {/* Box  */}
                    <div className='text-white flex flex-col gap-2 items-center    '>
                    <h1 className="bg-gradient-to-r font-[Orbitron] md:text-6xl text-3xl from-[#fa9e13] to-[#ffa25b]  bg-clip-text text-transparent  font-bold">
                    500+
                    </h1>
                    <div className='md:text-2xl font-semibold text-gray-300'>
                        <p className='text-sm md:text-2xl' >Active Drivers</p>
                    </div>

                </div>
                    {/* Box  */}
                    <div className='text-white flex flex-col gap-2 items-center    '>
                    <h1 className="bg-gradient-to-r font-[Orbitron] md:text-6xl text-3xl from-[#fa9e13] to-[#ffa25b]  bg-clip-text text-transparent  font-bold">
                    98%
                    </h1>
                    <div className='md:text-2xl font-semibold text-gray-300'>
                        <p className='text-sm md:text-2xl' >Customer Satisfaction</p>
                    </div>

                </div>
                    {/* Box  */}
                    <div className='text-white flex flex-col gap-2 items-center    '>
                    <h1 className="bg-gradient-to-r font-[Orbitron] md:text-6xl text-3xl from-[#fa9e13] to-[#ffa25b]  bg-clip-text text-transparent  font-bold">
                    $2.5M+
                    </h1>
                    <div className='md:text-2xl font-semibold text-gray-300'>
                        <p className='text-sm md:text-2xl' >Revenue Per Month</p>
                    </div>

                </div>
           
                

                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
    )
}

export default Iconsbox
