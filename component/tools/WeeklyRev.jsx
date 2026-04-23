"use client"
import React, { useState } from 'react'

const WeeklyRevenueEstimator = () => {
  const [toolData, setToolData] = useState({
    ratePerMile: '',
    weeklyMiles: '',
    weeklyFuel: '',
    dispatchPercentage: ''
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
    if (!toolData.ratePerMile || parseFloat(toolData.ratePerMile) <= 0) {
      newErrors.ratePerMile = 'Rate per mile is required'
    }
    if (!toolData.weeklyMiles || parseFloat(toolData.weeklyMiles) <= 0) {
      newErrors.weeklyMiles = 'Weekly miles are required'
    }
    if (!toolData.weeklyFuel || parseFloat(toolData.weeklyFuel) < 0) {
      newErrors.weeklyFuel = 'Weekly fuel cost is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const rate = parseFloat(toolData.ratePerMile)
    const miles = parseFloat(toolData.weeklyMiles)
    const fuel = parseFloat(toolData.weeklyFuel)
    const dispatchPerc = parseFloat(toolData.dispatchPercentage) || 0

    // Weekly Calculations
    const weeklyGross = rate * miles
    const dispatchFee = weeklyGross * (dispatchPerc / 100)
    const weeklyNet = weeklyGross - fuel - dispatchFee

    setResult({
      weeklyGross: weeklyGross.toLocaleString(),
      weeklyNet: weeklyNet.toLocaleString(),
      monthlyNet: (weeklyNet * 4.33).toLocaleString(undefined, { maximumFractionDigits: 0 }),
      annualNet: (weeklyNet * 52).toLocaleString(undefined, { maximumFractionDigits: 0 }),
      dispatchFee: dispatchFee.toLocaleString()
    })
  }

  const handleReset = () => {
    setToolData({
      ratePerMile: '',
      weeklyMiles: '',
      weeklyFuel: '',
      dispatchPercentage: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>📅 Weekly Revenue Estimator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Estimate your weekly, monthly, and annual trucking revenue. Project your gross earnings and net profit to set realistic goals and evaluate your long-term growth.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Weekly Driving Data</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Rate Per Mile ($) *</label>
            <input 
              type="number" step="0.01" name="ratePerMile" value={toolData.ratePerMile} onChange={handleInputChange} placeholder='2.50' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.ratePerMile ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.ratePerMile && <span className='text-red-500 text-sm'>{errors.ratePerMile}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Miles Per Week *</label>
            <input 
              type="number" name="weeklyMiles" value={toolData.weeklyMiles} onChange={handleInputChange} placeholder='2500' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.weeklyMiles ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.weeklyMiles && <span className='text-red-500 text-sm'>{errors.weeklyMiles}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Fuel Cost Per Week ($) *</label>
            <input 
              type="number" name="weeklyFuel" value={toolData.weeklyFuel} onChange={handleInputChange} placeholder='1200' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.weeklyFuel ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.weeklyFuel && <span className='text-red-500 text-sm'>{errors.weeklyFuel}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Dispatch Fee (%)</label>
            <input 
              type="number" name="dispatchPercentage" value={toolData.dispatchPercentage} onChange={handleInputChange} placeholder='10' 
              className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'
            />
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-1'>Weekly Net Profit</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-6'>${result.weeklyNet}</p>
            
            <div className='grid grid-cols-3 !gap-2 text-sm !mb-6'>
              <div className='bg-white !p-2 rounded border border-gray-200'>
                <p className='text-gray-600 text-[10px] uppercase font-bold'>Weekly Gross</p>
                <p className='font-bold text-gray-800'>${result.weeklyGross}</p>
              </div>
              <div className='bg-white !p-2 rounded border border-gray-200'>
                <p className='text-gray-600 text-[10px] uppercase font-bold'>Monthly Net</p>
                <p className='font-bold text-gray-800'>${result.monthlyNet}</p>
              </div>
              <div className='bg-white !p-2 rounded border border-gray-200'>
                <p className='text-gray-600 text-[10px] uppercase font-bold'>Annual Net</p>
                <p className='font-bold text-green-600'>${result.annualNet}</p>
              </div>
            </div>
            
            <p className='text-xs text-gray-500 italic'>* Monthly estimate based on 4.33 weeks per month.</p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate} 
          className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg uppercase'
        >
          Estimate Revenue
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

export default WeeklyRevenueEstimator