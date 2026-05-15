import React from 'react'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Contact from '@/component/Contact'
import Allguides from '@/component/Allguides'

const page = () => {
    return (
        <div className='bg-[#F7F9FB]'> 
            <Header />

            <div className='resourceHero py-4 !bg-[#004E89] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]'>
                <div className="wrapper md:w-[1000px] m-auto flex flex-col gap-4 flex-wrap ">
                    <div className='bg-[#266393] w-[80px] flex justify-center items-center rounded-full p-1 md:w-[80px] text-gray-300 border border-gray-500 font-bold'>
                        GUIDE 07
                    </div>
                    <div>
                        <h2 className='font-[Orbitron] text-white font-bold text-xl'>Best Load Boards for Owner Operators</h2>
                    </div>
                    <div>
                        <p className='font-light text-white'>Load boards are essential tools for finding freight. Owner operators use them daily to search for loads based on location, equipment type, and rate. Knowing which platforms to use makes a significant difference in load quality and revenue.    </p>
                    </div>
                </div>
            </div>


            <main>

                <div className="wrapper flex gap-4">
                    {/* Left Box  */}
                    <div className='bg-white border-t-3 shadow-xl  border-[var(--primary-color)] rounded-2xl md:w-[68%] p-4'>
                        <div >
                            <h4 className='font-[Orbitron] text-[#004E89] border-b border-[var(--primary-color)] w-fit font-bold'>Top Load Boards Compared</h4>
                            <p className='mt-2'>Last updated: May 2026 </p>

                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>DAT Power</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>~$45-$150/mo</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'>All equipment types</span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>RateView market data</span> </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Truckstop.com</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>~$35-$120/mo</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'>Dry van, reefe</span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>Market conditions tool</span> </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>123Loadboard</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>Free – $35/mo</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'>Budget carriers </span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>Good for new carriers</span> </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Convoy / Uber Freight</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>Free</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'>Dry van spot freight</span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>Instant booking</span> </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Direct Freight</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>Free – $45/mo</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'> Flatbed, specialized </span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>Large flatbed inventory</span> </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className=' mt-3 bg-[#F8F9FA] py-4 border-l-3 border-[var(--primary-color)] rounded-xl px-2'>
                                <div className='flex justify-between'>
                                    <div className='font-[Orbitron] font-bold  text-[#004E89]'>Hotshot</div>
                                    <div className='bg-[#1A7A3A] rounded-full font-bold px-2 py-1    text-[12px] text-white'>AVG: $1.75 – $2.50/mi</div>
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <p className='text-sm font-bold'>Best for :  <span className='font-light'>All equipment types</span></p>
                                    <p className='text-sm font-bold'>Key features : <span className='font-light'>RateView market data</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h4 className='font-[Orbitron] text-[#004E89] border-b border-[var(--primary-color)] w-fit font-bold'>Factors That Affect Freight Rates </h4>
                            <div className='mt-4'>
                                <ul className='flex flex-col gap-2'>
                                    <li>✔
                                    Check loads frequently — quality loads post and fill within minutes, especially early morning</li> 
                                    <li>✔
                                    Call brokers immediately — the first carrier to call usually gets the load at the best rate                                        </li>
                                    <li>✔
                                    Compare posted rates to market averages before accepting any load
                                        </li>
                                    <li>✔
                                    Set up load alerts in your preferred lanes so you are notified the moment good loads post
                                        </li>
                                    <li>✔
                                    Always calculate deadhead cost before accepting a load far from your next preferred pickup
                                        </li>
                                </ul>
                            </div>

                        </div>


                    </div>


                    {/* Right Box  */}
                    <div className='hidden md:block'>
                        <Allguides/>
                    </div>


                </div>

            </main>

            <Contact />

            <Footer />

        </div>
    )
}

export default page
