"use client"
import React, { useState } from 'react'

const LoanAffordabilityCalculator = () => {
  const [toolData, setToolData] = useState({
    monthlyRevenue: '',
    monthlyExpenses: '',
    loanTerm: ''
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
    if (!toolData.monthlyRevenue || parseFloat(toolData.monthlyRevenue) <= 0) {
      newErrors.monthlyRevenue = 'Monthly revenue is required'
    }
    if (!toolData.monthlyExpenses || parseFloat(toolData.monthlyExpenses) < 0) {
      newErrors.monthlyExpenses = 'Operating expenses are required'
    }
    if (!toolData.loanTerm || parseFloat(toolData.loanTerm) <= 0) {
      newErrors.loanTerm = 'Desired loan term is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const revenue = parseFloat(toolData.monthlyRevenue)
    const expenses = parseFloat(toolData.monthlyExpenses)
    const term = parseFloat(toolData.loanTerm)

    const netCashFlow = revenue - expenses
    
    // Safety Logic: 
    // Safe: Max 25% of net cash flow should go to the truck payment
    // Aggressive: Max 40% of net cash flow
    const safePayment = netCashFlow * 0.25
    const stretchedPayment = netCashFlow * 0.40

    setResult({
      netCashFlow: netCashFlow.toLocaleString(),
      safePayment: safePayment > 0 ? safePayment.toFixed(2) : '0.00',
      stretchedPayment: stretchedPayment > 0 ? stretchedPayment.toFixed(2) : '0.00',
      isNegative: netCashFlow <= 0
    })
  }

  const handleReset = () => {
    setToolData({
      monthlyRevenue: '',
      monthlyExpenses: '',
      loanTerm: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>💳 Truck Loan Affordability Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate the maximum truck payment your business can safely afford based on your current cash flow. A healthy payment ensures you can grow without risking your financial stability.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Monthly Business Financials</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Monthly Revenue ($) *</label>
            <input 
              type="number" name="monthlyRevenue" value={toolData.monthlyRevenue} onChange={handleInputChange} placeholder='25000' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.monthlyRevenue ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.monthlyRevenue && <span className='text-red-500 text-sm'>{errors.monthlyRevenue}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Monthly Expenses ($) *</label>
            <input 
              type="number" name="monthlyExpenses" value={toolData.monthlyExpenses} onChange={handleInputChange} placeholder='18000' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.monthlyExpenses ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.monthlyExpenses && <span className='text-red-500 text-sm'>{errors.monthlyExpenses}</span>}
            <span className='text-[10px] text-gray-500 italic'>(Exclude current truck payment)</span>
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label className='font-semibold text-gray-800'>Desired Loan Term (Months) *</label>
            <input 
              type="number" name="loanTerm" value={toolData.loanTerm} onChange={handleInputChange} placeholder='60' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.loanTerm ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className={`border rounded-lg !p-6 ${result.isNegative ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
          <div className='text-center'>
            {result.isNegative ? (
              <div>
                <p className='text-red-700 font-bold'>⚠️ Negative Cash Flow</p>
                <p className='text-sm text-gray-600'>Your expenses currently exceed your revenue. It is not recommended to take on new debt at this time.</p>
              </div>
            ) : (
              <div>
                <p className='text-gray-700 text-sm font-medium !mb-1'>Recommended Max Monthly Payment</p>
                <p className='text-4xl font-bold text-green-600 !mb-6'>${result.safePayment}</p>
                
                <div className='grid grid-cols-2 !gap-4 text-sm'>
                  <div className='bg-white !p-3 rounded border border-gray-200'>
                    <p className='text-gray-600 text-xs !mb-1'>Stretched Limit (40%)</p>
                    <p className='font-bold text-orange-500'>${result.stretchedPayment}</p>
                  </div>
                  <div className='bg-white !p-3 rounded border border-gray-200'>
                    <p className='text-gray-600 text-xs !mb-1'>Current Net Cash Flow</p>
                    <p className='font-bold text-gray-800'>${result.netCashFlow}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate} 
          className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg uppercase'
        >
          Calculate Affordability
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

export default LoanAffordabilityCalculator