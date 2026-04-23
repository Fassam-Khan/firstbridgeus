"use client"
import React, { useState } from 'react'

const TruckPaymentCalculator = () => {
  const [toolData, setToolData] = useState({
    truckPrice: '',
    downPayment: '',
    interestRate: '',
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
    if (!toolData.truckPrice || parseFloat(toolData.truckPrice) <= 0) {
      newErrors.truckPrice = 'Truck price is required'
    }
    if (!toolData.interestRate || parseFloat(toolData.interestRate) < 0) {
      newErrors.interestRate = 'Interest rate is required'
    }
    if (!toolData.loanTerm || parseFloat(toolData.loanTerm) <= 0) {
      newErrors.loanTerm = 'Loan term is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const price = parseFloat(toolData.truckPrice)
    const down = parseFloat(toolData.downPayment) || 0
    const annualRate = parseFloat(toolData.interestRate) / 100
    const months = parseFloat(toolData.loanTerm)

    const principal = price - down
    const monthlyRate = annualRate / 12

    let monthlyPayment = 0
    if (monthlyRate === 0) {
      monthlyPayment = principal / months
    } else {
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    }

    const totalCost = monthlyPayment * months
    const totalInterest = totalCost - principal

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalCost: totalCost.toFixed(2),
      principal: principal.toFixed(2)
    })
  }

  const handleReset = () => {
    setToolData({
      truckPrice: '',
      downPayment: '',
      interestRate: '',
      loanTerm: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>🏦 Semi Truck Payment Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Estimate your monthly semi truck loan payment instantly. Enter the truck price, down payment, interest rate, and loan term to calculate your exact monthly payment and total interest.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Loan Details</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Truck Price ($) *</label>
            <input 
              type="number" name="truckPrice" value={toolData.truckPrice} onChange={handleInputChange} placeholder='150000' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.truckPrice ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.truckPrice && <span className='text-red-500 text-sm'>{errors.truckPrice}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Down Payment ($)</label>
            <input 
              type="number" name="downPayment" value={toolData.downPayment} onChange={handleInputChange} placeholder='20000' 
              className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'
            />
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Annual Interest Rate (%) *</label>
            <input 
              type="number" step="0.01" name="interestRate" value={toolData.interestRate} onChange={handleInputChange} placeholder='7.5' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.interestRate ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.interestRate && <span className='text-red-500 text-sm'>{errors.interestRate}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Loan Term (Months) *</label>
            <input 
              type="number" name="loanTerm" value={toolData.loanTerm} onChange={handleInputChange} placeholder='60' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.loanTerm ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.loanTerm && <span className='text-red-500 text-sm'>{errors.loanTerm}</span>}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Estimated Monthly Payment</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-4'>${result.monthlyPayment}</p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Interest Paid</p>
                <p className='font-bold text-gray-800'>${result.totalInterest}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Loan Cost</p>
                <p className='font-bold text-gray-800'>${result.totalCost}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate} 
          className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg'
        >
          CALCULATE PAYMENT
        </button>
        <button 
          onClick={handleReset} 
          className='flex-1 bg-[#697a8f] font-semibold !py-3 text-white rounded hover:bg-[#556370] transition-all text-lg'
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default TruckPaymentCalculator