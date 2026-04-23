"use client"
import React, { useState } from 'react'

const DispatchFeeCalculator = () => {
  const [toolData, setToolData] = useState({
    loadPay: '',
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
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!toolData.loadPay || parseFloat(toolData.loadPay) <= 0) {
      newErrors.loadPay = 'Load Pay is required'
    }
    if (!toolData.dispatchPercentage || parseFloat(toolData.dispatchPercentage) < 0) {
      newErrors.dispatchPercentage = 'Percentage is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const pay = parseFloat(toolData.loadPay)
    const percentage = parseFloat(toolData.dispatchPercentage)

    const feeAmount = (pay * (percentage / 100))
    const takeHomePay = pay - feeAmount

    setResult({
      feeAmount: feeAmount.toFixed(2),
      takeHomePay: takeHomePay.toFixed(2),
      loadPay: pay,
      percentage: percentage
    })
  }

  const handleReset = () => {
    setToolData({ loadPay: '', dispatchPercentage: '' })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>📋 Dispatch Fee Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate your dispatcher fee and remaining take-home revenue from any load instantly. Understanding dispatch fees helps owner operators evaluate whether a dispatch service adds enough value to justify its cost.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Load & Dispatch Details</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label htmlFor="loadPay" className='font-semibold text-gray-800'>Load Pay ($) *</label>
            <input 
              type="number" 
              id="loadPay"
              name="loadPay" 
              value={toolData.loadPay} 
              onChange={handleInputChange} 
              placeholder='3500'
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${
                errors.loadPay ? 'border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.loadPay && <span className='text-red-500 text-sm'>{errors.loadPay}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label htmlFor="dispatchPercentage" className='font-semibold text-gray-800'>Dispatch Percentage (%) *</label>
            <input 
              type="number" 
              id="dispatchPercentage"
              name="dispatchPercentage" 
              value={toolData.dispatchPercentage} 
              onChange={handleInputChange} 
              placeholder='10'
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${
                errors.dispatchPercentage ? 'border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.dispatchPercentage && <span className='text-red-500 text-sm'>{errors.dispatchPercentage}</span>}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Your Take-Home Pay</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-4'>${result.takeHomePay}</p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Dispatcher Earnings ({result.percentage}%)</p>
                <p className='font-bold text-red-600'>-${result.feeAmount}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Original Gross Pay</p>
                <p className='font-bold text-[#004e89]'>${result.loadPay}</p>
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
          CALCULATE FEE
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

export default DispatchFeeCalculator