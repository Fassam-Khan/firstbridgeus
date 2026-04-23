"use client"
import React, { useState } from 'react'

const DeadheadCostCalculator = () => {
  const [toolData, setToolData] = useState({
    deadheadMiles: '',
    truckMPG: '',
    dieselPrice: ''
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
    if (!toolData.deadheadMiles || parseFloat(toolData.deadheadMiles) <= 0) {
      newErrors.deadheadMiles = 'Deadhead miles are required'
    }
    if (!toolData.truckMPG || parseFloat(toolData.truckMPG) <= 0) {
      newErrors.truckMPG = 'Valid MPG is required'
    }
    if (!toolData.dieselPrice || parseFloat(toolData.dieselPrice) <= 0) {
      newErrors.dieselPrice = 'Fuel price is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const miles = parseFloat(toolData.deadheadMiles)
    const mpg = parseFloat(toolData.truckMPG)
    const price = parseFloat(toolData.dieselPrice)

    const gallonsWasted = miles / mpg
    const totalCost = gallonsWasted * price
    const costPerMile = totalCost / miles

    setResult({
      totalCost: totalCost.toFixed(2),
      gallonsWasted: gallonsWasted.toFixed(1),
      costPerMile: costPerMile.toFixed(2),
      miles: miles
    })
  }

  const handleReset = () => {
    setToolData({ deadheadMiles: '', truckMPG: '', dieselPrice: '' })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>🛣 Deadhead Cost Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate the true cost of deadhead miles on any trucking trip. Empty miles burn fuel with zero revenue, directly cutting into your profit margin. Use this tool to estimate fuel wasted and decide whether a load is worth the repositioning cost.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Deadhead Trip Details</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label htmlFor="deadheadMiles" className='font-semibold text-gray-800'>Deadhead Miles *</label>
            <input 
              type="number" 
              id="deadheadMiles"
              name="deadheadMiles" 
              value={toolData.deadheadMiles} 
              onChange={handleInputChange} 
              placeholder='150'
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${
                errors.deadheadMiles ? 'border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.deadheadMiles && <span className='text-red-500 text-sm'>{errors.deadheadMiles}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label htmlFor="truckMPG" className='font-semibold text-gray-800'>Truck MPG *</label>
            <input 
              type="number" 
              step="0.1"
              id="truckMPG"
              name="truckMPG" 
              value={toolData.truckMPG} 
              onChange={handleInputChange} 
              placeholder='6.5'
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${
                errors.truckMPG ? 'border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.truckMPG && <span className='text-red-500 text-sm'>{errors.truckMPG}</span>}
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label htmlFor="dieselPrice" className='font-semibold text-gray-800'>Diesel Price ($/gallon) *</label>
            <input 
              type="number" 
              step="0.01"
              id="dieselPrice"
              name="dieselPrice" 
              value={toolData.dieselPrice} 
              onChange={handleInputChange} 
              placeholder='3.78'
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${
                errors.dieselPrice ? 'border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.dieselPrice && <span className='text-red-500 text-sm'>{errors.dieselPrice}</span>}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-red-700 text-sm font-medium !mb-2'>Total Profit Loss (Fuel Cost)</p>
            <p className='text-4xl font-bold text-red-600 !mb-4'>-${result.totalCost}</p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Fuel Wasted</p>
                <p className='font-bold text-gray-800'>{result.gallonsWasted} gal</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Cost Per Empty Mile</p>
                <p className='font-bold text-gray-800'>${result.costPerMile}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate} 
          className='flex-1 min-w-[200px] bg-[#004e89] font-semibold !py-3 !px-6 text-white rounded cursor-pointer hover:bg-[#003a63] transition-all duration-200 text-lg'
        >
          CALCULATE DEADHEAD COST
        </button>
        <button 
          onClick={handleReset} 
          className='flex-1 min-w-[200px] bg-[#697a8f] font-semibold !py-3 !px-6 text-white rounded cursor-pointer hover:bg-[#556370] transition-all duration-200 text-lg'
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default DeadheadCostCalculator