"use client"
import React, { useState } from 'react'

const RatePerMileCalculator = () => {
  const [toolData, setToolData] = useState({
    totalLoadPay: '',
    totalMiles: ''
  })

  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setToolData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!toolData.totalLoadPay || toolData.totalLoadPay === '') {
      newErrors.totalLoadPay = 'Total Load Pay is required'
    } else if (isNaN(toolData.totalLoadPay) || parseFloat(toolData.totalLoadPay) <= 0) {
      newErrors.totalLoadPay = 'Please enter a valid amount greater than 0'
    }

    if (!toolData.totalMiles || toolData.totalMiles === '') {
      newErrors.totalMiles = 'Total Miles is required'
    } else if (isNaN(toolData.totalMiles) || parseFloat(toolData.totalMiles) <= 0) {
      newErrors.totalMiles = 'Please enter a valid number greater than 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    const pay = parseFloat(toolData.totalLoadPay)
    const miles = parseFloat(toolData.totalMiles)
    const ratePerMile = (pay / miles).toFixed(2)

    setResult({
      ratePerMile: parseFloat(ratePerMile),
      totalLoadPay: pay,
      totalMiles: miles
    })
  }

  const handleReset = () => {
    setToolData({
      totalLoadPay: '',
      totalMiles: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>💵 Rate Per Mile Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate your trucking rate per mile to evaluate every load before you accept it. Knowing your revenue per mile helps owner operators set profitable minimum rates, compare broker offers against market averages, and ensure every load covers fuel, expenses, and leaves a healthy profit margin. Use this free rate per mile calculator before accepting any load.
        </p>
      </div>

      {/* Calculator */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Load Details</p>

        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          {/* Total Load Pay Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="totalLoadPay" className='font-semibold text-gray-800'>
              Total Load Pay [$] <span className='text-red-500'>*</span>
            </label>
            <input 
              type="number" 
              id="totalLoadPay"
              name="totalLoadPay"
              value={toolData.totalLoadPay}
              onChange={handleInputChange}
              placeholder='3500' 
              className={`border bg-white !px-4 !py-3 outline-none transition-all rounded ${
                errors.totalLoadPay ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.totalLoadPay && (
              <span className='text-red-500 text-sm'>{errors.totalLoadPay}</span>
            )}
          </div>

          {/* Total Miles Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="totalMiles" className='font-semibold text-gray-800'>
              Total Miles <span className='text-red-500'>*</span>
            </label>
            <input 
              type="number" 
              id="totalMiles"
              name="totalMiles"
              value={toolData.totalMiles}
              onChange={handleInputChange}
              placeholder='1200' 
              className={`border bg-white !px-4 !py-3 outline-none transition-all rounded ${
                errors.totalMiles ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.totalMiles && (
              <span className='text-red-500 text-sm'>{errors.totalMiles}</span>
            )}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Your Rate Per Mile</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-4'>
              ${result.ratePerMile.toFixed(2)}/mile
            </p>
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Load Pay</p>
                <p className='font-bold text-[#004e89]'>${result.totalLoadPay.toFixed(2)}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Miles</p>
                <p className='font-bold text-[#004e89]'>{result.totalMiles}</p>
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
          CALCULATE RATE
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

export default RatePerMileCalculator