"use client"
import React, { useState } from 'react'

const CostPerMileCalculator = () => {
  const [toolData, setToolData] = useState({
    totalExpenses: '',
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!toolData.totalExpenses || parseFloat(toolData.totalExpenses) <= 0) {
      newErrors.totalExpenses = 'Total monthly expenses are required'
    }
    if (!toolData.totalMiles || parseFloat(toolData.totalMiles) <= 0) {
      newErrors.totalMiles = 'Total monthly miles are required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const expenses = parseFloat(toolData.totalExpenses)
    const miles = parseFloat(toolData.totalMiles)
    const cpm = expenses / miles

    setResult({
      cpm: cpm.toFixed(2),
      expenses: expenses.toLocaleString(),
      miles: miles.toLocaleString()
    })
  }

  const handleReset = () => {
    setToolData({
      totalExpenses: '',
      totalMiles: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>🔍 Cost Per Mile Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate your true cost per mile to operate your trucking business. This is the single most important number for setting profitable rates and negotiating with confidence.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Monthly Operating Data</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Monthly Expenses ($) *</label>
            <input 
              type="number" name="totalExpenses" value={toolData.totalExpenses} onChange={handleInputChange} placeholder='12000' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.totalExpenses ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.totalExpenses && <span className='text-red-500 text-sm'>{errors.totalExpenses}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Monthly Miles *</label>
            <input 
              type="number" name="totalMiles" value={toolData.totalMiles} onChange={handleInputChange} placeholder='8500' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.totalMiles ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.totalMiles && <span className='text-red-500 text-sm'>{errors.totalMiles}</span>}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Your Cost Per Mile (CPM)</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-4'>
              ${result.cpm}/mile
            </p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Spend</p>
                <p className='font-bold text-gray-800'>${result.expenses}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Operating Miles</p>
                <p className='font-bold text-gray-800'>{result.miles}</p>
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
          Calculate CPM
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

export default CostPerMileCalculator