import React from 'react'
import Image from 'next/image'

const Equipment = () => {
  return (
    <div className='!py-4'>
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
                <div className='grid md:grid-cols-5 grid-cols-2 gap-4 !mt-4'>
                    {/* Card  */}
                    <div className='md:w-[250px] hover:scale-105 rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all  focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck1.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Dry Van</p>

                    </div>
                        {/* Card  */}
                        <div className='md:w-[250px] rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all hover:scale-105 focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck2.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Reefer</p>

                    </div>
                        {/* Card  */}
                        <div className='md:w-[250px] rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all hover:scale-105 focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck3.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Flatbed</p>

                    </div>
                        {/* Card  */}
                        <div className='md:w-[250px] rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all hover:scale-105 focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck4.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Step Deck</p>

                    </div>
                        {/* Card  */}
                        <div className='md:w-[250px] rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all hover:scale-105 focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck5.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Power Only</p>

                    </div>
                        {/* Card  */}
                        <div className='md:w-[250px] rounded-xl  border border-gray-300 hover:border-[var(--primary-color)] transition-all hover:scale-105 focus-within:scale-105 flex flex-col gap-4 text-center !p-4'> 
                        <Image src={'/truck6.png'} alt='DryVan' width={250} height={100}/>
                        <p className='text-lg font-bold font-[Orbitron]'>Hotshot</p>

                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Equipment
