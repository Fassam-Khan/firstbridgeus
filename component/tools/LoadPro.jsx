"use client"
import React, { useState } from 'react'

const LoadProfitCalculator = () => {
  const [loadData, setLoadData] = useState({
    loadRevenue: '',
    totalMiles: '',
    fuelPrice: '3.78',
    averageMPG: '',
    tolls: '',
    permits: '',
    dispatchFee: '',
    maintenanceReserve: '',
    otherExpenses: ''
  })

  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLoadData(prev => ({
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

    // Load Revenue validation
    if (!loadData.loadRevenue || loadData.loadRevenue === '') {
      newErrors.loadRevenue = 'Load Revenue is required'
    } else if (isNaN(loadData.loadRevenue) || parseFloat(loadData.loadRevenue) <= 0) {
      newErrors.loadRevenue = 'Please enter a valid amount greater than 0'
    }

    // Total Miles validation
    if (!loadData.totalMiles || loadData.totalMiles === '') {
      newErrors.totalMiles = 'Total Miles is required'
    } else if (isNaN(loadData.totalMiles) || parseFloat(loadData.totalMiles) <= 0) {
      newErrors.totalMiles = 'Please enter a valid number greater than 0'
    }

    // Fuel Price validation
    if (!loadData.fuelPrice || loadData.fuelPrice === '') {
      newErrors.fuelPrice = 'Fuel Price is required'
    } else if (isNaN(loadData.fuelPrice) || parseFloat(loadData.fuelPrice) <= 0) {
      newErrors.fuelPrice = 'Please enter a valid fuel price'
    }

    // Average MPG validation
    if (!loadData.averageMPG || loadData.averageMPG === '') {
      newErrors.averageMPG = 'Average MPG is required'
    } else if (isNaN(loadData.averageMPG) || parseFloat(loadData.averageMPG) <= 0) {
      newErrors.averageMPG = 'Please enter a valid MPG'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const revenue = parseFloat(loadData.loadRevenue)
    const miles = parseFloat(loadData.totalMiles)
    const fuelPrice = parseFloat(loadData.fuelPrice)
    const mpg = parseFloat(loadData.averageMPG)
    const tolls = loadData.tolls ? parseFloat(loadData.tolls) : 0
    const permits = loadData.permits ? parseFloat(loadData.permits) : 0
    const dispatchFeePercent = loadData.dispatchFee ? parseFloat(loadData.dispatchFee) : 0
    const maintenancePerMile = loadData.maintenanceReserve ? parseFloat(loadData.maintenanceReserve) : 0
    const otherExpenses = loadData.otherExpenses ? parseFloat(loadData.otherExpenses) : 0

    // Calculate Fuel Cost
    const gallonsNeeded = miles / mpg
    const fuelCost = gallonsNeeded * fuelPrice

    // Calculate Dispatch Fee
    const dispatchFeeAmount = (revenue * dispatchFeePercent) / 100

    // Calculate Maintenance Reserve
    const maintenanceReserveAmount = miles * maintenancePerMile

    // Total Expenses
    const totalExpenses = fuelCost + tolls + permits + dispatchFeeAmount + maintenanceReserveAmount + otherExpenses

    // Calculate Profit
    const netProfit = revenue - totalExpenses
    const profitMargin = ((netProfit / revenue) * 100).toFixed(2)
    const profitPerMile = (netProfit / miles).toFixed(2)

    setResult({
      revenue: revenue,
      totalMiles: miles,
      fuelCost: fuelCost.toFixed(2),
      fuelGallons: gallonsNeeded.toFixed(2),
      tolls: tolls.toFixed(2),
      permits: permits.toFixed(2),
      dispatchFee: dispatchFeeAmount.toFixed(2),
      maintenanceReserve: maintenanceReserveAmount.toFixed(2),
      otherExpenses: otherExpenses.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      netProfit: netProfit.toFixed(2),
      profitMargin: profitMargin,
      profitPerMile: profitPerMile
    })
  }

  const handleReset = () => {
    setLoadData({
      loadRevenue: '',
      totalMiles: '',
      fuelPrice: '3.78',
      averageMPG: '',
      tolls: '',
      permits: '',
      dispatchFee: '',
      maintenanceReserve: '',
      otherExpenses: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-4xl mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[var(--primary-color)]'>🚚 Load Profit Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Calculate the true profit on any trucking load before you accept it. This free load profit calculator factors in fuel cost, dispatch fees, tolls, maintenance reserves, and all other expenses to show your exact net profit and profit margin. Stop guessing and start making data-driven decisions on every load you haul.
        </p>
      </div>

      {/* Load Information Section */}
      <div className='bg-gray-50 !p-6 flex flex-col !gap-6 rounded-lg'>
        <p className='text-lg font-bold text-[var(--primary-color)]'>Load Information</p>

        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          {/* Load Revenue Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="loadRevenue" className='font-semibold text-gray-800'>
              Load Revenue ($) <span className='text-red-500'>*</span>
            </label>
            <input 
              type="number" 
              id="loadRevenue"
              name="loadRevenue"
              value={loadData.loadRevenue}
              onChange={handleInputChange}
              placeholder='4500' 
              className={`border bg-white !px-4 !py-3 outline-none transition-all rounded ${
                errors.loadRevenue ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.loadRevenue && (
              <span className='text-red-500 text-sm'>{errors.loadRevenue}</span>
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
              value={loadData.totalMiles}
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

      {/* Fuel Costs Section */}
      <div className='bg-blue-50 !p-6 flex flex-col !gap-6 rounded-lg border border-blue-200'>
        <p className='text-lg font-bold text-[var(--primary-color)]'>Fuel Costs</p>

        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          {/* Fuel Price Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="fuelPrice" className='font-semibold text-gray-800'>
              Fuel Price ($/gallon) <span className='text-red-500'>*</span> <span className='text-gray-500 font-normal text-sm'>${loadData.fuelPrice}/gal</span>
            </label>
            <input 
              type="number" 
              id="fuelPrice"
              name="fuelPrice"
              value={loadData.fuelPrice}
              onChange={handleInputChange}
              placeholder='3.78'
              step="0.01"
              className={`border bg-white !px-4 !py-3 outline-none transition-all rounded ${
                errors.fuelPrice ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.fuelPrice && (
              <span className='text-red-500 text-sm'>{errors.fuelPrice}</span>
            )}
          </div>

          {/* Average MPG Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="averageMPG" className='font-semibold text-gray-800'>
              Average MPG <span className='text-red-500'>*</span>
            </label>
            <input 
              type="number" 
              id="averageMPG"
              name="averageMPG"
              value={loadData.averageMPG}
              onChange={handleInputChange}
              placeholder='6.5' 
              step="0.1"
              className={`border bg-white !px-4 !py-3 outline-none transition-all rounded ${
                errors.averageMPG ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[var(--primary-color)]'
              }`}
            />
            {errors.averageMPG && (
              <span className='text-red-500 text-sm'>{errors.averageMPG}</span>
            )}
          </div>
        </div>
      </div>

      {/* Additional Expenses Section */}
      <div className='bg-amber-50 !p-6 flex flex-col !gap-6 rounded-lg border border-amber-200'>
        <p className='text-lg font-bold text-[var(--primary-color)]'>Additional Expenses</p>

        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          {/* Tolls Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="tolls" className='font-semibold text-gray-800'>
              Tolls ($)
            </label>
            <input 
              type="number" 
              id="tolls"
              name="tolls"
              value={loadData.tolls}
              onChange={handleInputChange}
              placeholder='0' 
              className='border bg-white !px-4 !py-3 outline-none transition-all rounded border-gray-300 focus:border-[var(--primary-color)]'
            />
          </div>

          {/* Permits / Fees Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="permits" className='font-semibold text-gray-800'>
              Permits / Fees ($)
            </label>
            <input 
              type="number" 
              id="permits"
              name="permits"
              value={loadData.permits}
              onChange={handleInputChange}
              placeholder='0' 
              className='border bg-white !px-4 !py-3 outline-none transition-all rounded border-gray-300 focus:border-[var(--primary-color)]'
            />
          </div>

          {/* Dispatch Fee Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="dispatchFee" className='font-semibold text-gray-800'>
              Dispatch Fee (%)
            </label>
            <input 
              type="number" 
              id="dispatchFee"
              name="dispatchFee"
              value={loadData.dispatchFee}
              onChange={handleInputChange}
              placeholder='8' 
              step="0.1"
              className='border bg-white !px-4 !py-3 outline-none transition-all rounded border-gray-300 focus:border-[var(--primary-color)]'
            />
          </div>

          {/* Maintenance Reserve Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="maintenanceReserve" className='font-semibold text-gray-800'>
              Maintenance Reserve ($/mile)
            </label>
            <input 
              type="number" 
              id="maintenanceReserve"
              name="maintenanceReserve"
              value={loadData.maintenanceReserve}
              onChange={handleInputChange}
              placeholder='0.08' 
              step="0.01"
              className='border bg-white !px-4 !py-3 outline-none transition-all rounded border-gray-300 focus:border-[var(--primary-color)]'
            />
          </div>

          {/* Other Expenses Input */}
          <div className='flex flex-col !gap-2'>
            <label htmlFor="otherExpenses" className='font-semibold text-gray-800'>
              Other Expenses ($)
            </label>
            <input 
              type="number" 
              id="otherExpenses"
              name="otherExpenses"
              value={loadData.otherExpenses}
              onChange={handleInputChange}
              placeholder='0' 
              className='border bg-white !px-4 !py-3 outline-none transition-all rounded border-gray-300 focus:border-[var(--primary-color)]'
            />
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className='!p-6 flex flex-col !gap-6 rounded-lg border-2 border-[var(--primary-color)] bg-gradient-to-br from-[var(--primary-color)]/5 to-blue-50'>
          {/* Profit Summary */}
          <div className='!gap-4 grid md:grid-cols-3 grid-cols-1'>
            {/* Net Profit Card */}
            <div className='bg-white !p-4 rounded-lg border border-gray-200 text-center'>
              <p className='text-gray-600 text-sm font-medium !mb-2'>Net Profit</p>
              <p className={`text-3xl font-bold ${parseFloat(result.netProfit) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.netProfit}
              </p>
            </div>

            {/* Profit Margin Card */}
            <div className='bg-white !p-4 rounded-lg border border-gray-200 text-center'>
              <p className='text-gray-600 text-sm font-medium !mb-2'>Profit Margin</p>
              <p className={`text-3xl font-bold ${parseFloat(result.profitMargin) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {result.profitMargin}%
              </p>
            </div>

            {/* Profit Per Mile Card */}
            <div className='bg-white !p-4 rounded-lg border border-gray-200 text-center'>
              <p className='text-gray-600 text-sm font-medium !mb-2'>Profit Per Mile</p>
              <p className={`text-3xl font-bold ${parseFloat(result.profitPerMile) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.profitPerMile}
              </p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className='!gap-4 grid md:grid-cols-2 grid-cols-1'>
            {/* Revenue & Expenses */}
            <div className='bg-white !p-4 rounded-lg border border-gray-200'>
              <h3 className='font-bold text-[var(--primary-color)] !mb-3'>Revenue & Expenses</h3>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Load Revenue</span>
                  <span className='font-semibold text-green-600'>${parseFloat(result.revenue).toFixed(2)}</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Fuel Cost ({result.fuelGallons} gal)</span>
                  <span className='font-semibold'>-${result.fuelCost}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Tolls</span>
                  <span className='font-semibold'>-${result.tolls}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Permits / Fees</span>
                  <span className='font-semibold'>-${result.permits}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Dispatch Fee</span>
                  <span className='font-semibold'>-${result.dispatchFee}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Maintenance Reserve</span>
                  <span className='font-semibold'>-${result.maintenanceReserve}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Other Expenses</span>
                  <span className='font-semibold'>-${result.otherExpenses}</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between !mt-3 text-lg'>
                  <span className='font-bold'>Total Expenses</span>
                  <span className='font-bold'>-${result.totalExpenses}</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className='bg-white !p-4 rounded-lg border border-gray-200'>
              <h3 className='font-bold text-[var(--primary-color)] !mb-3'>Key Metrics</h3>
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between !p-3 bg-blue-50 rounded'>
                  <span className='text-gray-700'>Total Miles</span>
                  <span className='font-semibold'>{result.totalMiles} mi</span>
                </div>
                <div className='flex justify-between !p-3 bg-blue-50 rounded'>
                  <span className='text-gray-700'>Revenue Per Mile</span>
                  <span className='font-semibold'>${(parseFloat(result.revenue) / parseFloat(result.totalMiles)).toFixed(2)}/mi</span>
                </div>
                <div className='flex justify-between !p-3 bg-green-50 rounded'>
                  <span className='text-gray-700'>Expense Per Mile</span>
                  <span className='font-semibold'>${(parseFloat(result.totalExpenses) / parseFloat(result.totalMiles)).toFixed(2)}/mi</span>
                </div>
                <div className={`flex justify-between !p-3 rounded ${parseFloat(result.netProfit) >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                  <span className='text-gray-700 font-semibold'>Profit Per Mile</span>
                  <span className={`font-bold ${parseFloat(result.profitPerMile) >= 0 ? 'text-green-600' : 'text-red-600'}`}>${result.profitPerMile}/mi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex !gap-4 flex-wrap sm:flex-nowrap'>
        <button 
          onClick={handleCalculate}
          className='flex-1 min-w-[200px] bg-[var(--primary-color)] font-semibold !py-3 !px-6 text-white rounded cursor-pointer hover:opacity-90 transition-all duration-200 text-lg'
        >
          CALCULATE PROFIT
        </button>
        <button 
          onClick={handleReset}
          className='flex-1 min-w-[200px] bg-gray-500 font-semibold !py-3 !px-6 text-white rounded cursor-pointer hover:opacity-90 transition-all duration-200 text-lg'
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default LoadProfitCalculator