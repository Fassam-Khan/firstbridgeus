"use client"
import React, { useState } from 'react'

const DieselFuelCalculator = () => {
  const [toolData, setToolData] = useState({
    tripMiles: '',
    truckMPG: '',
    dieselPrice: '3.78' // Defaulting to your provided value
  })

  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setToolData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!toolData.tripMiles || parseFloat(toolData.tripMiles) <= 0) newErrors.tripMiles = 'Trip miles required'
    if (!toolData.truckMPG || parseFloat(toolData.truckMPG) <= 0) newErrors.truckMPG = 'Valid MPG required'
    if (!toolData.dieselPrice || parseFloat(toolData.dieselPrice) <= 0) newErrors.dieselPrice = 'Price required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const miles = parseFloat(toolData.tripMiles)
    const mpg = parseFloat(toolData.truckMPG)
    const price = parseFloat(toolData.dieselPrice)

    const totalGallons = miles / mpg
    const totalCost = totalGallons * price
    const costPerMile = totalCost / miles

    setResult({
      totalCost: totalCost.toFixed(2),
      totalGallons: totalGallons.toFixed(1),
      costPerMile: costPerMile.toFixed(2),
      miles: miles
    })
  }

  const handleReset = () => {
    setToolData({ tripMiles: '', truckMPG: '', dieselPrice: '3.78' })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>⛽ Fuel Cost Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Estimate your diesel fuel cost for any trucking trip instantly. Fuel is the largest single expense for most owner operators, making accurate estimates essential for profitable load decisions.
        </p>
      </div>

      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Trip Details</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Trip Miles *</label>
            <input 
              type="number" name="tripMiles" value={toolData.tripMiles} onChange={handleInputChange} placeholder='1200'
              className={`border bg-white !px-4 !py-3 rounded ${errors.tripMiles ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.tripMiles && <span className='text-red-500 text-sm'>{errors.tripMiles}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Truck MPG *</label>
            <input 
              type="number" step="0.1" name="truckMPG" value={toolData.truckMPG} onChange={handleInputChange} placeholder='6.5'
              className={`border bg-white !px-4 !py-3 rounded ${errors.truckMPG ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.truckMPG && <span className='text-red-500 text-sm'>{errors.truckMPG}</span>}
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label className='font-semibold text-gray-800'>Diesel Price ($/gallon) *</label>
            <input 
              type="number" step="0.01" name="dieselPrice" value={toolData.dieselPrice} onChange={handleInputChange}
              className={`border bg-white !px-4 !py-3 rounded ${errors.dieselPrice ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </div>
      </div>

      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6 text-center'>
          <p className='text-gray-700 text-sm font-medium !mb-2'>Total Fuel Cost</p>
          <p className='text-4xl font-bold text-[#004e89] !mb-4'>${result.totalCost}</p>
          <div className='grid grid-cols-3 !gap-2 text-sm'>
            <div className='bg-white !p-2 rounded border border-gray-200'>
              <p className='text-gray-600 text-xs'>Gallons</p>
              <p className='font-bold text-[#004e89]'>{result.totalGallons}</p>
            </div>
            <div className='bg-white !p-2 rounded border border-gray-200'>
              <p className='text-gray-600 text-xs'>Cost/Mile</p>
              <p className='font-bold text-[#004e89]'>${result.costPerMile}</p>
            </div>
            <div className='bg-white !p-2 rounded border border-gray-200'>
              <p className='text-gray-600 text-xs'>Miles</p>
              <p className='font-bold text-[#004e89]'>{result.miles}</p>
            </div>
          </div>
        </div>
      )}

      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button onClick={handleCalculate} className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all'>
          CALCULATE FUEL COST
        </button>
        <button onClick={handleReset} className='flex-1 bg-[#697a8f] font-semibold !py-3 text-white rounded hover:bg-[#556370] transition-all'>
          RESET
        </button>
      </div>
    </div>
  )
}

export default DieselFuelCalculator