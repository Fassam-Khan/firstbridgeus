import React from 'react'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Contact from '@/component/Contact'

const page = () => {
    return (
        <div>
            <Header />

            <div className='resourceHero py-4 !bg-[#004E89] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]'>
                <div className="wrapper md:w-[1000px] m-auto flex flex-col gap-4 flex-wrap ">
                    <div className='bg-[#266393] w-[80px] flex justify-center items-center rounded-full p-1 md:w-[80px] text-gray-300 border border-gray-500 font-bold'>
                        GUIDE 04
                    </div>
                    <div>
                        <h2 className='font-[Orbitron] text-white font-bold text-xl'>Average Trucking Rate Per Mile</h2>
                    </div>
                    <div>
                        <p className='font-light text-white'>Knowing the average trucking rate per mile for your equipment type helps you evaluate whether any load is worth taking and gives you the data to negotiate confidently with brokers.</p>
                    </div>
                </div>
            </div>


            <main>

                <div className="wrapper">
                    {/* Left Box  */}
                    <div className='bg-white border-t-3 shadow-xl  border-[var(--primary-color)] rounded-2xl md:w-[68%] p-4'>
                        <div >
                            <h4 className='font-[Orbitron] text-[#004E89] border-b border-[var(--primary-color)] w-fit font-bold'>Current Market Rate Ranges by Equipment</h4>
                            <p className='mt-2'>Last updated: May 2026 <span className='font-light'>— Rates are spot market estimates. Verify with DAT or Truckstop before booking.</span></p>

                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Dry Van</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $2.00 - $3.00/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$1.80/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$3.50/mi</span></p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Reefer</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $2.50 – $3.50/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$2.20/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$4.00/mi</span></p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Flatbed</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $2.50 – $4.00/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$2.30/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$5.00/mi</span></p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Step Deck</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $2.75 – $4.00/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$2.50/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$5.50/mi</span></p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Power Only</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $2.20 – $3.00/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$1.80/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$3.75/mi</span></p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Hotshot</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $1.75 – $2.50/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm'>LOW <span className='text-red-700 font-bold'>$1.50/mi</span></p>
                                    <p className='text-sm'>HIGH <span className='text-green-700 font-bold'>$3.50/mi</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h4 className='font-[Orbitron] text-[#004E89] border-b border-[var(--primary-color)] w-fit font-bold'>Factors That Affect Freight Rates </h4>
                            <div className='mt-4'>
                                <ul className='flex flex-col gap-2'>
                                    <li>⚡
                                        Fuel prices: Higher diesel raises market rates as carriers increase minimums</li>
                                        <li>⚡
                                        Supply and demand: High-demand lanes pay more; oversupplied lanes pay less</li>
                                        <li>⚡
                                        Seasonality: Produce season (Apr-Jun) and holiday freight (Oct-Nov) spike rates</li>
                                        <li>⚡
                                        Lane direction: Backhaul lanes often pay 15-25% less than primary outbound lanes</li>
                                        <li>⚡
                                        Equipment type: Reefer and flatbed consistently earn 15-30% more than dry van</li>
                                </ul>
                            </div>

                        </div>


                    </div>


                </div>

            </main>

<Contact/>

            <Footer />

        </div>
    )
}

export default page
