import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
    return (

        <header className='bg-[var(--secondary-color)] '>
            <div className="wrapper flex justify-between items-center h-[70px] ">

                {/* Left Head  */}
                <div className='flex justify-center items-center'>
                    <Logo />
                </div>

                {/* Right Head  */}
                <div className='hidden md:block'>
                    <ul className='flex text-white  gap-10 text-lg font-semibold '>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>HOME</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>SERVICES</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>WHY US</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>FREE TOOLS</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>RESOURCES</li></Link>
                        <Link href={'/'}><li className='hover:text-[var(--primary-color)] transition-all'>CONTACT</li></Link>

                    </ul>

                </div>

                {/* Mobile Head  */}


            


                

            </div>

        </header>
    )
}

export default Header
