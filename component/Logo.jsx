import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'} >
    <div className='  relative h-[45px]  font-[Orbitron] '>
        <p className='text-white font-bold text-2xl '>FIRST BRIDGE</p>
        <span className='absolute bottom-[-4px] text-[var(--primary-color)] text-[12px] tracking-[1.5px] font-semibold '>DISPATCH SERVICES</span>
      
    </div>
    </Link>
  )
}

export default Logo
