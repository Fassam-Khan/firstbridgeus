"use client"
import React, { useState } from 'react'

const HOSCalculator = () => {
  const [toolData, setToolData] = useState({
    hoursDriven: '',
    hoursOnDuty: '',
    breakTaken: ''
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
    if (toolData.hoursDriven === '' || parseFloat(toolData.hoursDriven) < 0) {
      newErrors.hoursDriven = 'Hours driven is required'
    }
    if (toolData.hoursOnDuty === '' || parseFloat(toolData.hoursOnDuty) < 0) {
      newErrors.hoursOnDuty = 'Total on-duty time is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const driven = parseFloat(toolData.hoursDriven)
    const onDuty = parseFloat(toolData.hoursOnDuty)
    const breakHours = parseFloat(toolData.breakTaken) || 0

    // FMCSA Standard Rules
    const driveLimit = 11
    const dutyLimit = 14
    const breakTrigger = 8

    const remainingDrive = Math.max(0, driveLimit - driven)
    const remainingDuty = Math.max(0, dutyLimit - onDuty)
    
    // Check if a 30-min break is needed (Rule: Must take 30 mins after 8 hours of driving)
    const needsBreak = driven >= breakTrigger && breakHours < 0.5

    setResult({
      remainingDrive: remainingDrive.toFixed(1),
      remainingDuty: remainingDuty.toFixed(1),
      needsBreak: needsBreak,
      isViolation: driven > driveLimit || onDuty > dutyLimit
    })
  }

  const handleReset = () => {
    setToolData({
      hoursDriven: '',
      hoursOnDuty: '',
      breakTaken: ''
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className='flex flex-col shadow-2xl !gap-6 w-full border-t-4 rounded-2xl bg-white border-[var(--primary-color)] md:!p-8 !p-4 max-w-2xl !mx-auto'>
      {/* Heading */}
      <div className='text-center flex flex-col !gap-4'>
        <h2 className='font-bold md:text-4xl text-2xl text-[#004e89]'>⏱ HOS Driving Time Calculator</h2>
        <p className='font-light text-gray-700 leading-relaxed'>
          Stay compliant with FMCSA Hours of Service regulations. Calculate remaining drive time, your on-duty window, and break requirements to avoid costly CSA violations.
        </p>
      </div>

      {/* Calculator Inputs */}
      <div className='bg-[#f8f9fa] !p-6 flex flex-col !gap-6'>
        <p className='text-lg font-bold text-[#004e89]'>Current Duty Status</p>
        <div className='md:grid grid-cols-2 !gap-6 w-full flex flex-col'>
          
          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Hours Driven Today *</label>
            <input 
              type="number" step="0.1" name="hoursDriven" value={toolData.hoursDriven} onChange={handleInputChange} placeholder='6.5' 
              className={`border bg-white !px-4 !py-3 rounded outline-none transition-all ${errors.hoursDriven ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.hoursDriven && <span className='text-red-500 text-sm'>{errors.hoursDriven}</span>}
          </div>

          <div className='flex flex-col !gap-2'>
            <label className='font-semibold text-gray-800'>Total Hours On Duty *</label>
            <input 
              type="number" step="0.1" name="hoursOnDuty" value={toolData.hoursOnDuty} onChange={handleInputChange} placeholder='8.0' 
              className={`border bg-white !px-4 !py-3 rounded outline-none ${errors.hoursOnDuty ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.hoursOnDuty && <span className='text-red-500 text-sm'>{errors.hoursOnDuty}</span>}
          </div>

          <div className='flex flex-col !gap-2 col-span-2'>
            <label className='font-semibold text-gray-800'>Break Time Taken (hours)</label>
            <input 
              type="number" step="0.1" name="breakTaken" value={toolData.breakTaken} onChange={handleInputChange} placeholder='0.5' 
              className='border border-gray-300 bg-white !px-4 !py-3 rounded outline-none'
            />
            <span className='text-xs text-gray-500 italic'>Enter 0.5 for a 30-minute break</span>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className={`border rounded-lg !p-6 ${result.isViolation ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
          <div className='text-center'>
            <p className={`text-sm font-medium !mb-2 ${result.isViolation ? 'text-red-700' : 'text-green-700'}`}>
              {result.isViolation ? '⚠️ HOS VIOLATION DETECTED' : '✅ CURRENTLY COMPLIANT'}
            </p>
            <div className='flex flex-col !mb-4'>
                <span className='text-gray-600 text-xs'>Remaining Drive Time</span>
                <p className={`text-4xl font-bold ${result.isViolation ? 'text-red-600' : 'text-[#004e89]'}`}>
                {result.remainingDrive} hrs
                </p>
            </div>
            
            <div className='grid grid-cols-2 !gap-4 text-sm'>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>On-Duty Window Left</p>
                <p className='font-bold text-gray-800'>{result.remainingDuty} hrs</p>
              </div>
              <div className='bg-white !p-3 rounded border border-gray-200'>
                <p className='text-gray-600 text-xs !mb-1'>30-Min Break Status</p>
                <p className={`font-bold ${result.needsBreak ? 'text-red-600' : 'text-green-600'}`}>
                  {result.needsBreak ? 'Required Now' : 'Compliant'}
                </p>
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
          Check HOS Status
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

export default HOSCalculator