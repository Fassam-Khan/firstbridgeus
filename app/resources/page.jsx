import React from 'react'
import Header from '@/component/Header'
const page = () => {
    return (
        <div>
            <Header />
            {/* Title Section  */}
            <div className='bg-[#00467f] !py-4 text-white text-center'>
                <div className="wrapper flex justify-center items-center flex-col gap-4 md:h-[200px]">
                    <h2 className='font-[Orbitron] text-4xl font-bold'>Trucking Resource Hub</h2>
                    <div className='md:w-[500px]'>
                        <p>Free guides for owner operators and new trucking companies. Learn how to start, grow, and maximize profits in the trucking industry.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page
