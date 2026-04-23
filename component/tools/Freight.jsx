"use client"
import React, { useState } from 'react'

const FreightWeightCalculator = () => {
  const [toolData, setToolData] = useState({
    numPallets: '',
    weightPerPallet: '',
    truckEmptyWeight: '32000' // Setting a common default for a Class 8 truck + trailer
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
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!toolData.numPallets || parseFloat(toolData.numPallets) <= 0) {
      newErrors.numPallets = 'Number of pallets is required'
    }
    if (!toolData.weightPerPallet || parseFloat(toolData.weightPerPallet) <= 0) {
      newErrors.weightPerPallet = 'Weight per pallet is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const pallets = parseFloat(toolData.numPallets)
    const weightPer = parseFloat(toolData.weightPerPallet)
    const emptyWeight = parseFloat(toolData.truckEmptyWeight) || 0

    const cargoWeight = pallets * weightPer
    const grossWeight = cargoWeight + emptyWeight
    const isOverweight = grossWeight > 80000

    setResult({
      cargoWeight: cargoWeight.toLocaleString(),
      grossWeight: grossWeight,
      isOverweight: isOverweight,
      remainingCapacity: (80000 - grossWeight).toLocaleString()
    })
  }

  const handleReset = () => {
    setToolData({
      numPallets: '',
      weightPerPallet: '',
      truckEmptyWeight: '32000'
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>📦 Freight Weight Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate total freight weight by pallets and check DOT compliance before loading. Avoid costly overweight fines by estimating your gross vehicle weight before every run.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Freight Details</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Number of Pallets *</label>
            <input 
              type="number" name="numPallets" value={toolData.numPallets} onChange={handleInputChange} placeholder='26' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.numPallets ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.numPallets && <span className='text-red-500 text-sm'>{errors.numPallets}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Weight Per Pallet (lbs) *</label>
            <input 
              type="number" name="weightPerPallet" value={toolData.weightPerPallet} onChange={handleInputChange} placeholder='1500' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.weightPerPallet ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.weightPerPallet && <span className='text-red-500 text-sm'>{errors.weightPerPallet}</span>}
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label className='font-semibold text-gray-800'>Estimated Truck + Trailer Weight (lbs)</label>
            <input 
              type="number" name="truckEmptyWeight" value={toolData.truckEmptyWeight} onChange={handleInputChange} placeholder='32000' 
              className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'
            />
            <span className='text-xs text-gray-500 italic'>Standard Class 8 combo is approx. 32,000 - 35,000 lbs</span>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className={`border rounded-lg !p-6 transition-colors ${result.isOverweight ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
          <div className='text-center'>
            <p className={`text-sm font-medium !mb-2 ${result.isOverweight ? 'text-red-700' : 'text-green-700'}`}>
              {result.isOverweight ? '⚠️ OVERWEIGHT WARNING' : '✅ WEIGHT COMPLIANT'}
            </p>
            <p className={`text-4xl font-bold !mb-4 ${result.isOverweight ? 'text-red-600' : 'text-green-600'}`}>
              {result.grossWeight.toLocaleString()} lbs
            </p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Cargo Weight</p>
                <p className='font-bold text-gray-800'>{result.cargoWeight} lbs</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Remaining to 80k Limit</p>
                <p className={`font-bold ${result.isOverweight ? 'text-red-600' : 'text-green-600'}`}>
                  {result.remainingCapacity} lbs
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate} 
          className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg uppercase'
        >
          Calculate Weight
        </button>
        <button 
          onClick={handleReset} 
          className='flex-1 bg-[#697a8f] font-semibold !py-3 text-white rounded hover:bg-[#556370] transition-all text-lg uppercase'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default FreightWeightCalculator