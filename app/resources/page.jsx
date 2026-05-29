import React from 'react'
import Header from '@/component/Header'
import { getBlogs } from "@/lib/getBlogs"
import Image from 'next/image'
import { GraduationCap, BadgeQuestionMark, MapIcon } from 'lucide-react'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import BlogsPage from '@/component/GettAllBlog'
import Link from 'next/link'
const page = async () => {

    const blogs = await getBlogs();

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
                <div className='bg-[#f7f9fb]  md:h-auto h-[60px]'>
                    {/* Mobile Caruser  */}
                    <div className="md:hidden wrapper ">
                        <Carousel className=''>
                            <CarouselContent className='flex items-center '>

                                <CarouselItem className="basis-[60%]">
                                    {/* Card  */}
                                    <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                        <div className='flex gap-2 items-center  '>
                                            <Image src={'/book.svg'} width={24} height={24} alt='book' className='text-[var(--primary-color)]' />

                                            <p className='font-bold  text-lg'>Guides</p>
                                        </div>

                                        <span className='bg-[var(--primary-color)] !p-2 rounded-full w-5 h-5 flex justify-center items-center text-white'>10</span>
                                        <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>
                                    </div>


                                </CarouselItem>
                                <CarouselItem className="basis-[60%]">
                                    {/* Card  */}
                                    <a href="">
                                        <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                            <div className='flex gap-2 items-center  '>
                                                <Image src={'/market.svg'} width={24} height={24} alt='market' />

                                                <p className='font-bold  text-lg'>Market Updates</p>
                                            </div>
                                            <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                        </div>
                                    </a>
                                </CarouselItem>
                                <CarouselItem className="basis-[60%]">
                                    {/* Card  */}
                                    <a href="">
                                        <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                            <div className='flex gap-2 items-center  '>
                                                <GraduationCap className='text-[var(--primary-color)]' />
                                                <p className='font-bold  text-lg'>Glossary</p>
                                            </div>
                                            <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                        </div>
                                    </a>

                                </CarouselItem>
                                <CarouselItem className="basis-[60%]">
                                    {/* Card  */}
                                    <a href="">
                                        <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                            <div className='flex gap-2 items-center  '>
                                                <BadgeQuestionMark className='text-[var(--primary-color)]' />
                                                <p className='font-bold  text-lg'>Master FAQ</p>
                                            </div>
                                            <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                        </div>
                                    </a>

                                </CarouselItem>
                                <CarouselItem className="basis-[60%]">
                                    {/* Card  */}
                                    <a href="">
                                        <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                            <div className='flex gap-2 items-center  '>
                                                <MapIcon className='text-[var(--primary-color)]' />
                                                <p className='font-bold  text-lg'>State Regs</p>
                                            </div>
                                            <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                        </div>
                                    </a>
                                </CarouselItem>



                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* Large devices  */}
                    <div className="wrapper  ">
                        {/* NavLinks  */}
                        <div className='hidden h-[40px] md:flex  gap-4 justify-center'>
                            {/* Card  */}
                            <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                <div className='flex gap-2 items-center  '>
                                    <Image src={'/book.svg'} width={30} height={30} alt='book' className='text-[var(--primary-color)]' />
                                    <p className='font-bold  text-xl'>Guides</p>
                                </div>

                                <span className='bg-[var(--primary-color)] !p-2 rounded-full w-5 h-5 flex justify-center items-center text-white'>10</span>
                                <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>

                                {/* Hover box  */}
                                <div className='hidden group-hover:block absolute border-t-3 border-[var(--primary-color)] 
top-10 w-[480px] bg-[var(--secondary-color)] !p-4 text-white 
max-h-[400px] overflow-y-auto z-50'>
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
                                        <Link href={'/resources/how-to-start-a-truck-dispatching-business-in-2026'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>01</p>
                                                <div className='md:w-[150px]'>
                                                    <p>How to start a trucking company</p>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Card  */}
                                        <Link href={'/resources/how-to-get-loads-with-new-mc-authority'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>02</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Get Loads with New MC Authority</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    {/* Row  */}

                                    <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                        {/* Card  */}
                                        <Link href={'/resources/trucking-cost-per-mile-guide'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>03</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Trucking Cost Per Mile Guide</p>
                                                </div>
                                            </div>
                                        </Link>
                                        {/* Card  */}
                                        <Link href={'/resources/average-trucking-rate-per-mile'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>04</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Average Trucking Rate Per Mile</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    {/* Row  */}

                                    <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                        {/* Card  */}
                                        <Link href={'/resources/owner-operator-startup-cost-guide'}><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                            <p className='Orbitron text-[var(--primary-color)] font-bold'>05</p>
                                            <div className='md:w-[150px]'>
                                                <p>Owner Operator Startup Cost Guide</p>
                                            </div>
                                        </div>
                                        </Link>
                                        {/* Card  */}
                                        <Link href={'/resources/how-dispatch-services-work'}><div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                            <p className='Orbitron text-[var(--primary-color)] font-bold'>06</p>
                                            <div className='md:w-[150px]'>
                                                <p>How Dispatch Services Work</p>
                                            </div>
                                        </div>
                                        </Link>

                                    </div>
                                    {/* Row  */}

                                    <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                        {/* Card  */}
                                        <Link href={'/resources/best-load-boards-for-owner-operators'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>07</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Best Load Boards for Owner Operators</p>
                                                </div>
                                            </div>
                                        </Link>
                                        {/* Card  */}
                                        <Link href={'/resources/how-to-reduce-deadhead-miles'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>08</p>
                                                <div className='md:w-[150px]'>
                                                    <p>How to Reduce Deadhead Miles </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Row  */}

                                    <div className='flex gap-4 justify-between !px-2 !mt-1 '>
                                        {/* Card  */}
                                        <Link href={'/resources/how-to-calculate-trucking-profit-per-load'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>09</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Trucking Profit Per Load Guide</p>
                                                </div>
                                            </div>
                                        </Link>
                                        {/* Card  */}
                                        <Link href={'/resources/owner-operator-vs-company-driver'}>
                                            <div className='flex  gap-2  hover:bg-[#ffa382b2] rounded !px-1 hover:border transition-all cursor-pointer hover:border-[var(--primary-color)] '>
                                                <p className='Orbitron text-[var(--primary-color)] font-bold'>10</p>
                                                <div className='md:w-[150px]'>
                                                    <p>Owner Operator vs Company Driver</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                            {/* Card  */}
                            <a href="">
                                <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                    <div className='flex gap-2 items-center  '>
                                        <Image src={'/market.svg'} width={30} height={30} alt='market' />
                                        <p className='font-bold  text-xl'>Market Updates</p>
                                    </div>
                                    <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                </div>
                            </a>
                            {/* Card  */}
                            <a href="">
                                <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                    <div className='flex gap-2 items-center  '>
                                        <GraduationCap className='text-[var(--primary-color)] w-[30px] h-[30px]' />

                                        <p className='font-bold  text-xl'>Glossary</p>
                                    </div>
                                    <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                </div>
                            </a>
                            {/* Card  */}
                            <a href="">
                                <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                    <div className='flex gap-2 items-center  '>
                                        <BadgeQuestionMark className='text-[var(--primary-color)] w-[30px] h-[30px]' />
                                        <p className='font-bold  text-xl'>Master FAQ</p>
                                    </div>
                                    <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                </div>
                            </a>
                            {/* Card  */}
                            <a href="">
                                <div className='flex gap-4  md:w-[190px] relative h-full group cursor-pointer'>
                                    <div className='flex gap-2 items-center  '>
                                        <MapIcon className='text-[var(--primary-color)] w-[30px] h-[30px]' />

                                        <p className='font-bold  text-xl'>State Regs</p>
                                    </div>
                                    <div className='h-1 bg-[var(--primary-color)] w-full absolute -bottom-5'></div>


                                </div>
                            </a>

                        </div>



                    </div>


                </div>
                {/* Links  */}
                <div className='wrapper flex flex-col md:w-[1050px] !m-auto gap-4'>
                    {/* Heading  */}
                    <div>
                        <h4 className='text-[#004e89] font-bold font-[Orbitron] '>10 Guides + 4 Resource Sections</h4>
                    </div>
                    {/* Circle Links  */}
                    <div className="flex flex-wrap gap-4 ">

                        {/* Dynamic guide here  */}

                        {/* card  */}
                        <Link href={'/resources/how-to-start-a-truck-dispatching-business-in-2026'}>
                            <div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                                <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>01 Start a Trucking Company</p>
                            </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/how-to-get-loads-with-new-mc-authority'}>
                            <div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                                <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>02 Get Loads with New MC </p>
                            </div>
                        </Link>

                        {/* card  */}
                        <Link href={'/resources/trucking-cost-per-mile-guide'}>
                            <div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                                <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>03 Cost Per Mile Guide </p>
                            </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/average-trucking-rate-per-mile'}>
                            <div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                                <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>04 Average Rate Per Mile </p>
                            </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/owner-operator-startup-cost-guide'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>05 Startup Cost Guide</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources//how-dispatch-services-work'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>06 How Dispatch Work</p>
                        </div>
                        </Link>

                        {/* card  */}
                        <Link href={'/resources/best-load-boards-for-owner-operators'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>07 Best Load Boards</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/how-to-reduce-deadhead-miles'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>08 Reduce Deadhead Miles</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/how-to-calculate-trucking-profit-per-load'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>09 Profit Per Load</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/resources/owner-operator-vs-company-driver'}><div className="group  hover:text-white transition-all hover:bg-[var(--primary-color)] rounded-full !py-1 !px-3 border border-gray-300 bg-[#f7f9fb] ">
                            <p className=' group-hover:text-white transition-all text-[#004e89] font-bold text-sm'>10 Owner Op Vs Campany Driver</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/'}><div className="group   transition-all  rounded-full !py-1 !px-3 border-2 border-[#e6b800] bg-[#fff8dc] ">
                            <p className=' transition-all text-[#b4920b] font-bold text-sm'>📰 Market Updates</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <Link href={'/'}><div className="group   transition-all  rounded-full !py-1 !px-3 border-2 border-[#004e89] bg-[#e8f4fd] ">
                            <p className='  transition-all text-[#004e89] font-bold text-sm'>🎓 Glossary</p>
                        </div>
                        </Link>
                        {/* card  */}
                        <a href=""><div className="group   transition-all  rounded-full !py-1 !px-3 border-2 border-[#ff6b35] bg-[#fff0eb] ">
                            <p className='  transition-all text-[#ff6b35] font-bold text-sm'>? Master FAQ</p>
                        </div>
                        </a>
                        {/* card  */}
                        <a href=""><div className="group   transition-all  rounded-full !py-1 !px-3 border-2 border-[#1a7a3a] bg-[#eafaf1] ">
                            <p className='  transition-all text-[#1a7a3a] font-bold text-sm'>🗺️ State Regs</p>
                        </div>
                        </a>
                    </div>

                </div>

            </div>
            {/* Get All Blogs  */}
            <div>
                <div className="wrapper !mt-10">
                    {/* <div className='font-bold text-center  md:text-3xl text-lg text-[var(--secondary-color)] !mt-4'>
                        <h3>This Is Blogs</h3>
                    </div> */}
                    <BlogsPage />
                </div>
            </div>

            {/* Market Section  */}
            <div className='bg-[var(--secondary-color)] market py-6 '>
                <div className="wrapper md:w-[1100px] m-auto ">
                    {/* Heading  */}
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='md:text-4xl text-lg font-bold'>INDUSTRY  NEWS & MARKET UPDATES</h1>
                        <p className='font-light'>Freight market conditions, diesel prices, and seasonal trends for owner operators</p>
                        <div className='rounded-full  text-[12px] w-[200px] bg-[var(--primary-color)] font-[Orbitron] text-white py-1 px-2 '>
                            📅 Q2 2026 Market Data
                        </div>
                    </div>

                    {/* Card Container  */}
                    <div className="grid md:grid-cols-3  grid-cols-1 gap-2 mt-6">
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">⛽</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>National Avg Diesel Price</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>$3.78/gal</p>
                            <p className='font-light text-white '>Down from Q4 2025 highs. Midwest and Gulf Coast remain lowest. California continues 40–60¢ premium. Use fuel cards for additional savings of $0.10–$0.40/gal.</p>
                        </div>
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">📦</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>Dry Van Spot Market</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>$2.05/mi</p>
                            <p className='font-light text-white '>National average inclusive of fuel surcharge. Southeast and Midwest corridors showing strongest demand. Avoid Northeast backhauls — historically low-paying in Q1.</p>
                        </div>
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">❄️</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>Reefer Spot Market</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>$2.68/mi</p>
                            <p className='font-light text-white '>Pre-produce season positioning underway. Reefer demand picking up from Florida and Texas heading north. Rates expected to climb through April–June peak produce season.</p>
                        </div>
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">🏗️</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>Flatbed & Step Deck</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>$2.82/mi</p>
                            <p className='font-light text-white '>Construction season acceleration driving strong flatbed demand. Steel, lumber, and building materials freight up. Best rates in Texas–Midwest–Southeast triangle lanes.</p>
                        </div>
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">🔥</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>Hotshot & Power Only</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>$2.10/mi</p>
                            <p className='font-light text-white '>Hotshot market steady. Power only demand driven by retailer restocking cycles. Oilfield hotshot remains strongest niche — Texas Permian Basin paying premium rates.</p>
                        </div>
                        {/* Card  */}
                        <div className=" hover:border-[var(--primary-color)] transition-all p-4 border border-gray-700 shadow flex flex-col gap-3 rounded">
                            <p className="text-2xl">📊</p>
                            <p className='font-[Orbitron] text-sm font-bold text-[#FFD23A]'>Market Sentiment</p>
                            <p className='text-[#FFD23A] text-3xl font-bold'>CAUTIOUS OPTIMISM</p>
                            <p className='font-light text-white '>Load-to-truck ratio improving YoY. Rate softness in spot market continues but showing gradual recovery. Carriers with broker relationships outperforming pure spot market operators.</p>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default page
