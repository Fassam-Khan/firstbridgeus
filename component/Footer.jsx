import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[var(--secondary-color)]  w-full'>
            <div className="wrapper  ">
                {/* Top footer  */}
                <div className='text-white flex justify-between flex-wrap gap-3 border-b border-gray-700 !pb-12'>
                    <div className='  flex-col gap-3 hidden md:flex'>
                        <h4 className='font-[Orbitron] text-xl text-[#ffd23f] font-semibold'>First Bridge Dispatch</h4>
                        <div className='w-55'>
                        <p>Your trusted partner in truck dispatching services across the United States. Building bridges to success, one load at a time.</p>


                        </div>
                    </div>
                    {/* Quick Links  */}
                    <div className='flex-col gap-3'>
                        <h4 className='font-[Orbitron] text-xl text-[#ffd23f] font-semibold'>Quick Links</h4>
                        <ul className='!mt-3 flex flex-col gap-2'>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Home</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Services</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Why Choose Us</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Contact</li></Link>
                        </ul>
                    </div>
                    {/* Services  */}
                    <div className=' flex-col gap-3'>
                        <h4 className='font-[Orbitron] text-xl text-[#ffd23f] font-semibold'>Services</h4>
                        <ul className='!mt-3 flex flex-col gap-2'>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Load Finding</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Route Planning</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Carrier Setup</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Billing Support</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>CDL Recruitment </li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Factoring Setup</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Insurance Setup</li></Link>
                        </ul>
                    </div>

                    {/* Free Tools  */}
                    <div className=' flex-col gap-3'>
                        <h4 className='font-[Orbitron] text-xl text-[#ffd23f] font-semibold'>Free Tools </h4>
                        <ul className='!mt-3 flex flex-col gap-2'>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>All Free Calculators</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Diesel Fuel Prices</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Rate Per Mile</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Load Profit</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Fuel Cost </li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Brake Even Rate</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)]'>Cost Per Mile</li></Link>
                        </ul>
                    </div>

                    {/* Contact  */}
                    <div className=' flex-col gap-3'>
                        <h4 className='font-[Orbitron] text-xl text-[#ffd23f] font-semibold'>Contact Info </h4>
                        <ul className='!mt-3 flex flex-col gap-2'>
                        <li className='hover:text-[var(--primary-color)]'><a href="mailto:info@firstbridgedispatch.com">📧 Email: info@firstbridgedispatch.com</a></li>
                        <li className=''>🌐 Available 24/7</li>
                        <li>📍 Serving All 48 States</li>
                        
                        </ul>
                    </div>
                    

                </div>
                {/* Botom Footer  */}
                <div className='flex flex-col items-center text-gray-300 justify-center !p-4 text-center'>
                    <div>
                        <p>© 2026 First Bridge Dispatch Services. All rights reserved.</p>
                    </div>
                    <div className='flex gap-2 !mt-3 text-[12px] underline '>
                        <Link href={'/'} className='!px-1 h-4 border-r border-gray-600'>Privacy</Link>
                        <Link href={'/'} className='!px-1 h-4 border-r border-gray-600'>Terms</Link>
                        <Link href={'/'} className='!px-1 h-4 border-r border-gray-600'>Disclaimer</Link>
                        <Link href={'/'} className='!px-1 h-4 '>SMS Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
