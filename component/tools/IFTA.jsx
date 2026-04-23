"use client"
import React, { useState } from 'react'

const IFTATaxCalculator = () => {
  const [toolData, setToolData] = useState({
    totalMiles: '',
    totalGallons: '',
    taxRate: ''
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
    if (!toolData.totalMiles || parseFloat(toolData.totalMiles) <= 0) {
      newErrors.totalMiles = 'Total miles are required'
    }
    if (!toolData.totalGallons || parseFloat(toolData.totalGallons) <= 0) {
      newErrors.totalGallons = 'Gallons purchased are required'
    }
    if (!toolData.taxRate || parseFloat(toolData.taxRate) < 0) {
      newErrors.taxRate = 'Tax rate is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const miles = parseFloat(toolData.totalMiles)
    const gallons = parseFloat(toolData.totalGallons)
    const rate = parseFloat(toolData.taxRate)

    // Step 1: Calculate MPG
    const mpg = miles / gallons
    
    // Step 2: Tax Calculation
    // For simplicity in a general calculator, we calculate based on the provided rate.
    // Tax Owed = (Miles / Avg MPG) * Tax Rate - (Gallons Purchased * Tax Rate)
    // However, usually, a quick estimate for owner-ops is (Total Miles / Avg MPG) * Rate
    // and comparing to what was already paid at the pump.
    const taxOwed = (miles / mpg) * rate
    const taxAlreadyPaid = gallons * rate
    const balance = taxOwed - taxAlreadyPaid

    setResult({
      mpg: mpg.toFixed(2),
      taxOwed: Math.abs(balance).toFixed(2),
      isRefund: balance < 0,
      totalTaxLiability: taxOwed.toFixed(2)
    })
  }

  const handleReset = () => {
    setToolData({
      totalMiles: '',
      totalGallons: '',
      taxRate: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>📝 IFTA Tax Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Estimate your quarterly IFTA fuel tax obligation. Enter your total miles and gallons to calculate your taxable gallons and estimated IFTA tax owed or refund due.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>IFTA Quarterly Data</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Miles Driven *</label>
            <input 
              type="number" name="totalMiles" value={toolData.totalMiles} onChange={handleInputChange} placeholder='30000' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.totalMiles ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.totalMiles && <span className='text-red-500 text-sm'>{errors.totalMiles}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Gallons Purchased *</label>
            <input 
              type="number" name="totalGallons" value={toolData.totalGallons} onChange={handleInputChange} placeholder='4600' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.totalGallons ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.totalGallons && <span className='text-red-500 text-sm'>{errors.totalGallons}</span>}
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label className='font-semibold text-gray-800'>Average Fuel Tax Rate ($/gallon) *</label>
            <input 
              type="number" step="0.001" name="taxRate" value={toolData.taxRate} onChange={handleInputChange} placeholder='0.25' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.taxRate ? 'border-red-500' : 'border-gray-300'}`}
            />
            <span className='text-xs text-gray-500 italic'>Varies by state (e.g., $0.25 - $0.40)</span>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className={`border rounded-lg !p-6 ${result.isRefund ? 'bg-green-50 border-green-500' : 'bg-blue-50 border-blue-500'}`}>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>
              {result.isRefund ? 'Estimated IFTA Refund' : 'Estimated IFTA Tax Owed'}
            </p>
            <p className={`text-4xl font-bold !mb-4 ${result.isRefund ? 'text-green-600' : 'text-[#004e89]'}`}>
              ${result.taxOwed}
            </p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Average MPG</p>
                <p className='font-bold text-gray-800'>{result.mpg}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Tax Liability</p>
                <p className='font-bold text-gray-800'>${result.totalTaxLiability}</p>
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
          Calculate IFTA Tax
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

export default IFTATaxCalculator