"use client"
import React, { useState } from 'react'

const BreakEvenCalculator = () => {
  const [toolData, setToolData] = useState({
    truckPayment: '',
    insuranceCost: '',
    fuelCost: '',
    maintenanceCost: '',
    otherExpenses: '',
    totalMonthlyMiles: ''
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
    // Only Fuel and Miles are strictly required based on your prompt asterisk, 
    // but usually, we want at least one expense.
    if (!toolData.fuelCost || parseFloat(toolData.fuelCost) < 0) {
      newErrors.fuelCost = 'Monthly fuel cost is required'
    }
    if (!toolData.totalMonthlyMiles || parseFloat(toolData.totalMonthlyMiles) <= 0) {
      newErrors.totalMonthlyMiles = 'Total monthly miles is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const expenses = [
      parseFloat(toolData.truckPayment) || 0,
      parseFloat(toolData.insuranceCost) || 0,
      parseFloat(toolData.fuelCost) || 0,
      parseFloat(toolData.maintenanceCost) || 0,
      parseFloat(toolData.otherExpenses) || 0
    ]

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0)
    const miles = parseFloat(toolData.totalMonthlyMiles)
    const breakEvenRate = totalExpenses / miles

    setResult({
      breakEvenRate: breakEvenRate.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      miles: miles,
      targetRate: (breakEvenRate * 1.20).toFixed(2) // 20% profit margin target
    })
  }

  const handleReset = () => {
    setToolData({
      truckPayment: '',
      insuranceCost: '',
      fuelCost: '',
      maintenanceCost: '',
      otherExpenses: '',
      totalMonthlyMiles: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>⚖ Break Even Rate Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate your trucking break-even rate per mile to know exactly what you must charge to cover all monthly operating expenses. Use this to set your absolute minimum rate, then target 15 to 20 percent above it for healthy profit margins.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Monthly Fixed Expenses</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Truck Payment ($)</label>
            <input type="number" name="truckPayment" value={toolData.truckPayment} onChange={handleInputChange} placeholder='1500' className='border bg-white !px-4 !py-3 rounded border-gray-300 outline-none'/>
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Insurance ($/mo)</label>
            <input type="number" name="insuranceCost" value={toolData.insuranceCost} onChange={handleInputChange} placeholder='800' className='border bg-white !px-4 !py-3 rounded border-gray-300 outline-none'/>
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Fuel Cost ($/mo) *</label>
            <input type="number" name="fuelCost" value={toolData.fuelCost} onChange={handleInputChange} placeholder='4500' className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.fuelCost ? 'border-red-500' : 'border-gray-300'}`}/>
            {errors.fuelCost && <span className='text-red-500 text-sm'>{errors.fuelCost}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Maintenance ($/mo)</label>
            <input type="number" name="maintenanceCost" value={toolData.maintenanceCost} onChange={handleInputChange} placeholder='500' className='border bg-white !px-4 !py-3 rounded border-gray-300 outline-none'/>
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Other Expenses ($/mo)</label>
            <input type="number" name="otherExpenses" value={toolData.otherExpenses} onChange={handleInputChange} placeholder='200' className='border bg-white !px-4 !py-3 rounded border-gray-300 outline-none'/>
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Monthly Miles *</label>
            <input type="number" name="totalMonthlyMiles" value={toolData.totalMonthlyMiles} onChange={handleInputChange} placeholder='8000' className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.totalMonthlyMiles ? 'border-red-500' : 'border-gray-300'}`}/>
            {errors.totalMonthlyMiles && <span className='text-red-500 text-sm'>{errors.totalMonthlyMiles}</span>}
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='bg-gradient-to-br from-[#004e89]/5 to-[#00a8e8]/5 border border-[#00a8e8] rounded-lg !p-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-sm font-medium !mb-2'>Your Break-Even Rate</p>
            <p className='text-4xl font-bold text-[#004e89] !mb-4'>${result.breakEvenRate}/mile</p>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>Total Monthly Spend</p>
                <p className='font-bold text-gray-800'>${result.totalExpenses}</p>
              </div>
              <div className='bg-white !p-3 rounded border border-[#00a8e8]'>
                <p className='text-[#004e89] text-xs !mb-1'>Target (20% Profit)</p>
                <p className='font-bold text-[#00a8e8]'>${result.targetRate}/mile</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button onClick={handleCalculate} className='flex-1 bg-[#004e89] font-semibold !py-3 text-white rounded hover:bg-[#003a63] transition-all text-lg'>
          CALCULATE BREAK EVEN
        </button>
        <button onClick={handleReset} className='flex-1 bg-[#697a8f] font-semibold !py-3 text-white rounded hover:bg-[#556370] transition-all text-lg'>
          RESET
        </button>
      </div>
    </div>
  )
}

export default BreakEvenCalculator