import React from 'react'
import Image from 'next/image'

const Equipment = () => {
  return (
    <div>
        <div className="wrapper">
              {/* Heading  */}
              <div className='text-center' id='faq'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='md:md:text-5xl text-3xl  font-extrabold '>Equipment Types We Dispatch</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg'>
                        <p>Professional dispatching for all major equipment types</p>
                    </div>

                </div>

                {/* Card Container  */}
                <div>
                    {/* Card  */}
                    <div className='w-[150px] h-[100px]'> hi
                        <Image src={'/truck1.png'} alt='DryVan' width={150} height={100}/>

                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Equipment
