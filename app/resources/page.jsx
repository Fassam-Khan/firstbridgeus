import React from 'react'
import Header from '@/component/Header'
import { getBlogs } from "@/lib/getBlogs"
import Image from 'next/image'
import { GraduationCap, BadgeQuestionMark, MapIcon } from 'lucide-react'
import Faq from '@/component/Faq'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import BlogsPage from '@/component/GettAllBlog'
import Link from 'next/link'
import Footer from '@/component/Footer'
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
            <div className='bg-[var(--secondary-color)] market py-6 before:content[""]  before:bg-[repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 107, 53, 0.03) 40px, rgba(255, 107, 53, 0.03) 80px)]'>
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


                    {/* Current Spot Rates  */}
                    <div>
                        {/* heading  */}
                        <div className="flex justify-between flex-wrap mt-10">
                            <p className='text-[#FFD23F] font-bold font-[Orbitron]'>
                                📈 Current Spot Rate Ranges by Equipment
                            </p>
                            <p className='text-gray-500 font-[Orbitron] text-sm'>
                                Last updated: May 2026
                            </p>
                        </div>

                        {/* Table  */}
                        <div>
                            <div className='overflow-auto '>

                                <table className='w-full shadow-2xl mt-6'>
                                    <thead className='bg-[#41222A] font-[Orbitron]'>
                                        <tr>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Equipment</td>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Low</td>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Average</td>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Hight</td>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Trend</td>
                                            <td className='text-[#FFD23F] text-sm font-bold'>Best Lanes</td>

                                        </tr>
                                    </thead>
                                    <tbody className='text-white'>
                                        <tr className='border-b border-gray-800'>
                                            <td>Dry Van 53'</td>
                                            <td>Reefer 53'</td>
                                            <td>$2.10/mi</td>
                                            <td>$3.80/mi</td>
                                            <td>▲ Rising</td>
                                            <td>FL–Midwest, TX–Northeast</td>
                                        </tr>
                                        <tr className='border-b border-gray-800'>
                                            <td>Flatbed 48'/53'</td>
                                            <td>$2.20/mi</td>
                                            <td>$2.82/mi</td>
                                            <td>$4.50/mi</td>
                                            <td>▲ Strong</td>
                                            <td>TX–Midwest, Southeast</td>
                                        </tr>
                                        <tr className='border-b border-gray-800'>
                                            <td>Step Deck</td>
                                            <td>$2.40/mi</td>
                                            <td>$2.95/mi</td>
                                            <td>$5.00/mi</td>
                                            <td>▲ Strong</td>
                                            <td>Southeast–Midwest</td>
                                        </tr>
                                        <tr className='border-b border-gray-800'>
                                            <td>Power Only</td>
                                            <td>$1.75/mi</td>
                                            <td>$2.10/mi</td>
                                            <td>$3.20/mi</td>
                                            <td>— Flat</td>
                                            <td>Retail corridors</td>
                                        </tr>
                                        <tr className='border-b border-gray-800'>
                                            <td>Hotshot</td>
                                            <td>$1.40/mi</td>
                                            <td>$2.10/mi</td>
                                            <td>$3.20/mi</td>
                                            <td>— Flat</td>
                                            <td>TX Permian, oilfield</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            {/* Card Section  */}
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mt-6'>
                                {/* Card  */}
                                <div className='border-l-3 border-[var(--primary-color)] bg-[rgba(255,107,53,0.1)] p-4 ' >
                                    <p className='text-white font-bold'>
                                        🌱 Produce Season (Apr–Jun): <span className='font-light'>Reefer rates spike 20–40%. Position in FL or TX before April to capitalize on northbound freight surge.</span>
                                    </p>
                                </div>
                                {/* Card  */}
                                <div className='border-l-3 border-[var(--primary-color)] bg-[rgba(255,107,53,0.1)] p-4 ' >
                                    <p className='text-white font-bold'>
                                        🏗️ Construction Surge (Mar–Oct): <span className='font-light'>Flatbed demand peaks spring through fall. Building materials, steel coil, and machinery drive premium rates.</span>
                                    </p>
                                </div>
                                {/* Card  */}
                                <div className='border-l-3 border-[var(--primary-color)] bg-[rgba(255,107,53,0.1)] p-4 ' >
                                    <p className='text-white font-bold'>
                                        🛍️ Peak Season (Oct–Nov):  <span className='font-light'>All equipment types see rate increases ahead of holiday retail. Dry van strongest — book loads 2–3 weeks ahead.</span>
                                    </p>
                                </div>
                                {/* Card  */}
                                <div className='border-l-3 border-[var(--primary-color)] bg-[rgba(255,107,53,0.1)] p-4 ' >
                                    <p className='text-white font-bold'>
                                        ❄️ Winter Slowdown (Jan–Feb):  <span className='font-light'>Spot rates historically weakest. Focus on contract lanes or use dispatch service to secure consistent freight.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Glossary Section  */}
            <div className='bg-[#F7F9FB]'>
                <div className='wrapper md:w-[1100px] m-auto'>

                    {/* Heading  */}
                    <div>
                        <h2 className='font-bold text-4xl'>TRUCKING GLOSSARY & TERMINOLOGY</h2>
                        <p className='mt-3'>Essential terms every owner operator and new carrier needs to know</p>
                    </div>

                    {/* Links  */}
                    <div className='mt-6 flex gap-3 flex-wrap'>
                        <Link href={'/resources/#gloss-a'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>A</Link>
                        <Link href={'/resources/#gloss-b'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>B</Link>
                        <Link href={'/resources/#gloss-c'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>C</Link>
                        <Link href={'/resources/#gloss-d'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>D</Link>
                        <Link href={'/resources/#gloss-e'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>E</Link>
                        <Link href={'/resources/#gloss-f'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>F</Link>
                        <Link href={'/resources/#gloss-h'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>H</Link>
                        <Link href={'/resources/#gloss-i'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>I</Link>
                        <Link href={'/resources/#gloss-l'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>L</Link>
                        <Link href={'/resources/#gloss-m'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>M</Link>
                        <Link href={'/resources/#gloss-o'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>O</Link>
                        <Link href={'/resources/#gloss-p'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>P</Link>
                        <Link href={'/resources/#gloss-r'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>R</Link>
                        <Link href={'/resources/#gloss-s'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>S</Link>
                        <Link href={'/resources/#gloss-t'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>T</Link>
                        <Link href={'/resources/#gloss-u'} className=' bg-white font-bold font-[Orbitron] rounded  py-1 px-3 text-[var(--secondary-color)] border-3 border-gray-300'>U</Link>


                    </div>

                    {/* Link Section  */}

                    <div id='gloss-a'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>A</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Accessorial Charges</h4>
                                <p className='font-light'>Extra fees beyond the base freight rate — such as detention, layover, lumper, fuel surcharge, or hazmat. Always confirm which accessorials are covered before accepting a load.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Authority (MC Authority)</h4>
                                <p className='font-light'>The FMCSA-issued operating authority that legally allows a carrier to transport freight for hire in interstate commerce. Required before booking any brokered load.</p>
                            </div>
                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-b'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>B</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Bill of Lading (BOL)</h4>
                                <p className='font-light'>The legal document between shipper and carrier that lists freight details, pickup/delivery info, and terms. Always get a signed BOL at pickup and delivery — it protects you in disputes.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>BOC-3</h4>
                                <p className='font-light'>A federal filing that designates a process agent in each state where you operate. Required by FMCSA before your authority activates. Usually filed by your BOC-3 service provider for ~$30.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Break-Even Rate</h4>
                                <p className='font-light'>The minimum rate per mile you must charge to cover all operating costs with zero profit. Know this number before accepting any load — charging below it guarantees a loss.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Broker</h4>
                                <p className='font-light'>A middleman who connects shippers with carriers. Brokers find freight from shippers, post it on load boards or call carriers directly, and take a margin (typically 10–20%) between shipper pay and carrier pay.</p>
                            </div>
                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-c'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>C</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Cargo Insurance</h4>
                                <p className='font-light'>Insurance that covers the freight you are hauling in case of damage or theft. FMCSA requires minimum cargo coverage — most brokers require $100,000. Some loads (high-value, temperature sensitive) require more.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>CDL (Commercial Driver's License)</h4>
                                <p className='font-light'>The license required to operate a commercial motor vehicle over 26,001 lbs. Class A CDL is required for semi-trucks towing trailers over 10,000 lbs. Hotshot operators may not need a CDL if GVWR stays under 26,001 lbs.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Check Call</h4>
                                <p className='font-light'>A status update call or message from carrier to broker confirming load pickup, current location, and ETA. Most brokers require at least one check call mid-transit. Dispatch services handle all check calls for you.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Cost Per Mile (CPM)</h4>
                                <p className='font-light'>All operating expenses divided by total miles driven. The most important financial metric for owner operators. Knowing your CPM tells you the minimum rate you can profitably accept on any load.</p>
                            </div>
                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-d'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>D</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>DAT</h4>
                                <p className='font-light'>The largest load board platform in trucking, with millions of loads posted daily. Offers market rate data (RateView) by lane so you know if a broker's rate is fair before calling.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Deadhead Miles</h4>
                                <p className='font-light'>Miles driven without a paying load — either to a pickup location or repositioning after delivery. Deadhead still costs fuel and time. Industry target is under 10–15% of total miles.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Detention Payl</h4>
                                <p className='font-light'>Extra compensation for time spent waiting at a shipper or receiver beyond the free time window (typically 2 hours). Standard detention rate is $25–$75/hour. Always include detention in your rate confirmation language.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Dispatcher</h4>
                                <p className='font-light'>A professional who finds loads, negotiates rates, handles broker communication, and manages paperwork on behalf of carriers. A good dispatcher consistently beats self-dispatched rates and eliminates empty days.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Dry Van</h4>
                                <p className='font-light'>The most common trailer type — an enclosed, non-temperature-controlled trailer (48' or 53') used for general freight. Highest load volume on any load board.</p>
                            </div>
                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-e'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>E</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>EIN (Employer Identification Number)</h4>
                                <p className='font-light'>A federal tax ID number for your business, issued by the IRS. Required to open a business bank account, apply for authority, and file taxes as an owner operator.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>ELD (Electronic Logging Device)</h4>
                                <p className='font-light'>A device that electronically records a driver's Hours of Service (HOS) data. Required by FMCSA for most commercial drivers. Replaces paper log books. Popular options include KeepTruckin (Motive), Samsara, and Rand McNally.</p>
                            </div>

                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-f'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>F</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Factoring</h4>
                                <p className='font-light'>A service where a factoring company pays you 90–97% of your invoice immediately after delivery, then collects full payment from the broker/shipper. Eliminates 30–60 day payment waits. Typical fee is 2–5% of invoice.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Flatbed</h4>
                                <p className='font-light'>An open, flat trailer without sides or roof. Used for construction materials, steel, machinery, and oversized freight. Requires tarping and strapping skills. Pays 20–30% more than dry van on average.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>FMCSA</h4>
                                <p className='font-light'>Federal Motor Carrier Safety Administration — the federal agency that regulates commercial motor vehicles, issues MC authority, enforces HOS rules, and maintains the safety fitness database (SAFER).</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Fuel Surcharge (FSC)</h4>
                                <p className='font-light'>An additional charge added to freight rates to account for diesel price fluctuations. Usually calculated as a percentage of the linehaul rate or a per-mile amount tied to the DOE weekly diesel index.</p>
                            </div>

                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-h'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>H</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>HOS (Hours of Service)</h4>
                                <p className='font-light'>FMCSA regulations governing how many hours a commercial driver can drive and work per day and week. Key rules: 11 hours driving / 14-hour window / 30-min break after 8 hours / 70 hours in 8 days.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Hotshot</h4>
                                <p className='font-light'>Expedited freight hauled with a heavy-duty pickup truck (F-450/F-550 class) and a gooseneck or flatbed trailer. No CDL required under 26,001 lbs GVWR. Popular for oilfield equipment, urgent parts, and LTL oversized cargo.</p>
                            </div>

                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-i'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>I</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>IFTA (International Fuel Tax Agreement)</h4>
                                <p className='font-light'>A tax agreement among US states and Canadian provinces that simplifies fuel tax reporting for interstate carriers. You report total miles and fuel purchased by state each quarter; net tax owed or refunded is calculated automatically.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>IRP (International Registration Plan)</h4>
                                <p className='font-light'>A multi-state vehicle registration program that apportions truck registration fees based on the percentage of miles driven in each state. Required for vehicles operating in multiple states over 26,001 lbs.</p>
                            </div>

                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-l'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>L</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Lane</h4>
                                <p className='font-light'>A defined route between two geographic areas (e.g., "Chicago to Dallas" or "Atlanta to Los Angeles"). Some lanes pay better than others due to supply/demand imbalances, seasonal freight patterns, or backhaul scarcity.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Load Board</h4>
                                <p className='font-light'>An online marketplace where freight brokers post available loads and carriers search for them. Major platforms include DAT, Truckstop.com, and 123Loadboard. Essential tools for finding spot market freight.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Lumper</h4>
                                <p className='font-light'>A third-party worker hired to unload freight at a receiver's dock. Many shippers and receivers require lumpers. The lumper fee is often covered by the broker — confirm before accepting the load.</p>
                            </div>

                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-m'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>M</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>MC Number (Motor Carrier Number)</h4>
                                <p className='font-light'>The unique operating authority number issued by FMCSA to licensed carriers. Required to haul freight for brokers. Takes 20–25 business days to activate after filing. Cannot book brokered loads without it.</p>
                            </div>


                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-o'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>O</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Owner Operator</h4>
                                <p className='font-light'>A truck driver who owns their own equipment and operates as an independent carrier. Can be leased to a larger carrier or operate under their own authority. Higher income potential than company driving, with more responsibility.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Oversize / Overweight (OS/OW)</h4>
                                <p className='font-light'>Loads that exceed standard legal dimensions or weight limits and require special permits, escort vehicles, or travel time restrictions. Pays significantly more than standard loads but adds complexity and cost.</p>
                            </div>


                        </div>
                    </div>

                    {/* Link Section  */}
                    <div id='gloss-p'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>P</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Power Only</h4>
                                <p className='font-light'>A freight arrangement where the carrier provides only the truck (tractor) and the shipper or broker provides the trailer. Common with drop-and-hook freight. Eliminates loading/unloading waits.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>POD (Proof of Delivery)</h4>
                                <p className='font-light'>A signed document confirming freight was delivered in good condition. Required by most brokers to release payment. Always get a clean, signed POD at delivery — it protects you against false damage claims.</p>
                            </div>


                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-r'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>R</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Rate Confirmation</h4>
                                <p className='font-light'>A written document from the broker confirming load details, rate, pickup/delivery locations, and payment terms. Always get a signed rate confirmation before dispatching on any load. It is your contract.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Rate Per Mile (RPM)</h4>
                                <p className='font-light'>Total freight payment divided by loaded miles. The key metric for comparing load profitability across different runs. Always compare RPM to your cost per mile — not just the gross rate.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Reefer (Refrigerated Trailer)</h4>
                                <p className='font-light'>A temperature-controlled trailer used for perishable food, pharmaceuticals, and other temperature-sensitive cargo. Requires a refrigeration unit (Thermo King or Carrier). Pays 15–30% more than dry van.</p>
                            </div>


                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-s'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>S</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Safety Score (CSA Score)</h4>
                                <p className='font-light'>FMCSA's Compliance, Safety, Accountability scoring system that rates carriers on violations, accidents, and inspections. High scores can prevent brokers from booking you. Keep violations minimal and dispute errors promptly.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Spot Rate</h4>
                                <p className='font-light'>The current market rate for a one-time load, as opposed to a contracted rate. Spot rates fluctuate daily based on supply/demand. In high-demand seasons, spot rates can exceed contract rates significantly.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Step Deck (Drop Deck)</h4>
                                <p className='font-light'>A flatbed trailer with a lower deck section that allows taller freight to be hauled while staying within legal height limits. Pays more than standard flatbed due to versatility with oversized cargo.</p>
                            </div>


                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-t'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>T</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>TONU (Truck Order Not Used)</h4>
                                <p className='font-light'>A fee paid to the carrier when a load is cancelled after the carrier has already been dispatched. Typically $150–$300. Always include TONU language in your rate confirmation to protect yourself from broker cancellations.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>Tarp Pay</h4>
                                <p className='font-light'>Additional compensation for flatbed loads that require the freight to be covered with tarps. Standard tarp pay is $50–$150 per tarp depending on size and difficulty. Always negotiate tarp pay upfront.</p>
                            </div>



                        </div>
                    </div>
                    {/* Link Section  */}
                    <div id='gloss-u'>
                        <div className='text-3xl mt-6 text-[var(--primary-color)] font-bold p-2 border-b-2 border-[var(--primary-color] w-min'>U</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-3'>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>UCR (Unified Carrier Registration)</h4>
                                <p className='font-light'>An annual federal registration and fee program for interstate carriers. Fee is based on fleet size — starts at $69/year for carriers with 1–2 trucks. Must be renewed each year before January 1.</p>
                            </div>
                            {/* Card  */}
                            <div className='p-4 rounded-xl border border-gray-300 bg-white hover:border-[var(--primary-color)] transition-all'>
                                <h4 className='font-[Orbitron] font-bold text-[var(--light-color)]'>USDOT Number</h4>
                                <p className='font-light'>A unique identifier assigned to commercial vehicles by the US DOT for safety monitoring. Required for any vehicle over 10,001 lbs in interstate commerce. Typically obtained alongside your MC number.</p>
                            </div>



                        </div>
                    </div>



                </div>
            </div>

            {/* Faq Section  */}
            <Faq />


            {/* Footer */}

            <Footer/>






        </div>
    )
}

export default page
