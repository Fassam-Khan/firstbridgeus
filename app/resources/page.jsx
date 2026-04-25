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

            {/* main content  */}

            <div>
                {/* nav links  */}
                <div className='bg-[#f7f9fb] '>
                    <div className="wrapper h-[60px] flex  gap-4 justify-center ">

                        {/* Card  */}
                        <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                            <div className='flex gap-2 items-center  '>
                                <p>📚</p>
                                <p className='font-bold  text-2xl'>Guides</p>
                            </div>

                            <span className='bg-[var(--primary-color)] !p-2 rounded-full w-5 h-5 flex justify-center items-center text-white'>10</span>
                            <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>

                            {/* Hover box  */}
                            <div className='hidden group-hover:block  absolute border-t-3 border-[var(--primary-color)] top-10 w-[480px] bg-[var(--secondary-color)] !p-4 text-white'>
                                {/* Top box  */}
                                <div className='flex items-center'>
                                    <div className='md:w-[350px]'>
                                        <p className='font-[Orbitron] text-[12px] text-[#ffd23f]'>10 Owner Operator Guides</p>
                                    </div>

                                    <div className='h-[1px] bg-gray-600 w-full '></div>
                                </div>

                                {/* List Container  */}
                                {/* Row  */}

                                <div className='flex gap-4 justify-between !px-2 !mt-1  gap-2'>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>

                                </div>
                                {/* Row  */}

                                <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>

                                </div>
                                {/* Row  */}

                                <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>

                                </div>
                                {/* Row  */}

                                <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>

                                </div>
                                {/* Row  */}

                                <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>
                                    {/* Card  */}
                                    <a href=""><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                        <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                        <div className='md:w-[150px]'>
                                            <p>How to start a trucking company</p>
                                        </div>
                                    </div>
                                    </a>

                                </div>

                            </div>
                        </div>
                        {/* Card  */}
                        <a href="">
                            <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                <div className='flex gap-2 items-center  '>
                                    <p>📚</p>
                                    <p className='font-bold  text-2xl'>Market Updates</p>
                                </div>
                                <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                            </div>
                        </a>
                        {/* Card  */}
                        <a href="">
                            <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                <div className='flex gap-2 items-center  '>
                                    <p>📚</p>
                                    <p className='font-bold  text-2xl'>Glossary</p>
                                </div>
                                <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                            </div>
                        </a>
                        {/* Card  */}
                        <a href="">
                            <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                <div className='flex gap-2 items-center  '>
                                    <p>📚</p>
                                    <p className='font-bold  text-2xl'>Master FAQ</p>
                                </div>
                                <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                            </div>
                        </a>
                         {/* Card  */}
                         <a href="">
                            <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                <div className='flex gap-2 items-center  '>
                                    <p>📚</p>
                                    <p className='font-bold  text-2xl'>State Regs</p>
                                </div>
                                <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                            </div>
                        </a>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default page
