"use client"
import React, { useState } from 'react'

const TripProfitCalculator = () => {
  const [toolData, setToolData] = useState({
    grossRevenue: '',
    fuelCost: '',
    dispatchFee: '',
    tolls: '',
    otherExpenses: ''
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
    if (!toolData.grossRevenue || parseFloat(toolData.grossRevenue) <= 0) {
      newErrors.grossRevenue = 'Gross revenue is required'
    }
    if (!toolData.fuelCost || parseFloat(toolData.fuelCost) < 0) {
      newErrors.fuelCost = 'Fuel cost is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const revenue = parseFloat(toolData.grossRevenue)
    const fuel = parseFloat(toolData.fuelCost) || 0
    const dispatch = parseFloat(toolData.dispatchFee) || 0
    const tolls = parseFloat(toolData.tolls) || 0
    const other = parseFloat(toolData.otherExpenses) || 0

    const totalExpenses = fuel + dispatch + tolls + other
    const netProfit = revenue - totalExpenses
    const profitMargin = (netProfit / revenue) * 100

    // Rating Logic
    let rating = 'Below Standard'
    let ratingColor = 'text-red-600'
    if (profitMargin >= 30) {
      rating = 'Excellent'
      ratingColor = 'text-green-600'
    } else if (profitMargin >= 15) {
      rating = 'Fair'
      ratingColor = 'text-blue-600'
    }

    setResult({
      netProfit: netProfit.toFixed(2),
      margin: profitMargin.toFixed(1),
      totalExpenses: totalExpenses.toFixed(2),
      rating: rating,
      ratingColor: ratingColor
    })
  }

  const handleReset = () => {
    setToolData({
      grossRevenue: '',
      fuelCost: '',
      dispatchFee: '',
      tolls: '',
      otherExpenses: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>📈 Trip Profit Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate your net trip profit after all expenses. See your exact net profit and margin to determine if a load meets your business standards.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <div>
          <p className='text-lg font-bold text-[#004e89] !mb-4'>Revenue</p>
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Load Revenue ($) *</label>
            <input 
              type="number" name="grossRevenue" value={toolData.grossRevenue} onChange={handleInputChange} placeholder='3500' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.grossRevenue ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.grossRevenue && <span className='text-red-500 text-sm'>{errors.grossRevenue}</span>}
          </div>
        </div>

        <div>
          <p className='text-lg font-bold text-[#004e89] !mb-4'>Trip Expenses</p>
          <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
            <div className='flex flex-col !gap-2'>
              <label className='font-semibold text-gray-800'>Fuel Cost ($) *</label>
              <input type="number" name="fuelCost" value={toolData.fuelCost} onChange={handleInputChange} placeholder='800' className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.fuelCost ? 'border-red-500' : 'border-gray-300'}`}/>
            </div>
            <div className='flex flex-col !gap-2'>
              <label className='font-semibold text-gray-800'>Dispatch Fee ($)</label>
              <input type="number" name="dispatchFee" value={toolData.dispatchFee} onChange={handleInputChange} placeholder='350' className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'/>
            </div>
            <div className='flex flex-col !gap-2'>
              <label className='font-semibold text-gray-800'>Tolls ($)</label>
              <input type="number" name="tolls" value={toolData.tolls} onChange={handleInputChange} placeholder='75' className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'/>
            </div>
            <div className='flex flex-col !gap-2'>
              <label className='font-semibold text-gray-800'>Other Expenses ($)</label>
              <input type="number" name="otherExpenses" value={toolData.otherExpenses} onChange={handleInputChange} placeholder='50' className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'/>
            </div>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Estimated Net Profit</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-2'>${result.netProfit}</p>
            <p className={`text-lg font-bold !mb-4 ${result.ratingColor}`}>Rating: {result.rating}</p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Expenses</p>
                <p className='font-bold text-red-600'>${result.totalExpenses}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Profit Margin</p>
                <p className='font-bold text-gray-800'>{result.margin}%</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button onClick={handleCalculate} className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg uppercase'>
          Calculate Profit
        </button>
        <button onClick={handleReset} className='flex-1 bg-[#697a8f] font-semibold !py-3 text-white rounded hover:bg-[#556370] transition-all text-lg uppercase'>
          Reset
        </button>
      </div>
    </div>
  )
}

export default TripProfitCalculator