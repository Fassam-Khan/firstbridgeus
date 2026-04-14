"use client"
import React from 'react'
import Logo from './Logo'
import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        mcNumber: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    // Validation function
    const validateForm = () => {
        const newErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Mobile phone number is required'
        } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number'
        }
        if (!formData.mcNumber.trim()) {
            newErrors.mcNumber = 'MC number is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitMessage('')

        // Validate form
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Add document to Firestore
            await addDoc(collection(db, 'contactForms'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                mcNumber: formData.mcNumber,
                message: formData.message,
                submittedAt: serverTimestamp()
            })

            // Success message
            setSubmitMessage('✓ Form submitted successfully! We will contact you soon.')
            
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                mcNumber: '',
                message: ''
            })
            setErrors({})

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitMessage(''), 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitMessage('✗ Error submitting form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='relative bg-[var(--primary-color)] text-white md:!p-6' id='contact'>
            <div className="wrapper flex justify-between items-center flex-wrap">
                {/* Left Div  */}
                <div className='flex flex-col gap-4 '>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-4xl font-bold'>Ready to get started?</h4>
                        <div className='md:w-[400px]'>
                            <p className='text-lg'>Contact us in any convenient way to order services or get detailed information on your question.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            
                        </div>
                        <div>
                            <a href="mailto:info@firstbridgedispatch.com">info@firstbridgedispatch.com</a>
                        </div>
                    </div>
                </div>

                {/* Right Div  */}
                <div className=''>
                    <form onSubmit={handleSubmit} className='bg-white md:w-[450px] w-[100%] shadow-2xl text-[var(--secondary-color)] rounded !p-6 flex flex-col gap-4 flex-wrap'>
                        
                        {/* Submit Message */}
                        {submitMessage && (
                            <div className={`p-3 rounded text-sm font-semibold ${submitMessage.includes('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {submitMessage}
                            </div>
                        )}

                        {/* First Name & Last Name */}
                        <div className='flex justify-between gap-4 flex-wrap'>
                            <div className='flex flex-col gap-2 md:w-auto w-full flex-1'>
                                <label htmlFor="firstName" className='font-semibold text-lg'>FIRST NAME*</label>
                                <div className='group w-full'>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`border-b outline-none focus:border-[var(--primary-color)] w-full transition-all ${errors.firstName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.firstName && (
                                        <p className='text-red-400 text-sm !mt-1 font-semibold'>{errors.firstName}</p>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 md:w-auto w-full flex-1'>
                                <label htmlFor="lastName" className='font-semibold text-lg'>LAST NAME*</label>
                                <div className='group w-full'>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`border-b outline-none focus:border-[var(--primary-color)] w-full transition-all ${errors.lastName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.lastName && (
                                        <p className='text-red-400 text-sm !mt-1 font-semibold'>{errors.lastName}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className='flex justify-between gap-4 flex-wrap'>
                            <div className='flex flex-col gap-2 md:w-auto w-full flex-1'>
                                <label htmlFor="email" className='font-semibold text-lg'>EMAIL*</label>
                                <div className='group w-full'>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`border-b outline-none focus:border-[var(--primary-color)] w-full transition-all ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && (
                                        <p className='text-red-400 text-sm !mt-1 font-semibold'>{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 md:w-auto w-full flex-1'>
                                <label htmlFor="phone" className='font-semibold text-lg'>MOBILE PHONE NUMBER*</label>
                                <div className='group w-full'>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`border-b outline-none focus:border-[var(--primary-color)] w-full transition-all ${errors.phone ? 'border-red-500' : ''}`}
                                    />
                                    {errors.phone && (
                                        <p className='text-red-400 text-sm !mt-1 font-semibold'>{errors.phone}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* MC Number  */}
                        <div className='group w-full gap-2 flex flex-col'>
                            <label htmlFor="mcNumber" className='font-semibold text-lg'>MC NUMBER*</label>
                            <input
                                type="text"
                                name="mcNumber"
                                id="mcNumber"
                                value={formData.mcNumber}
                                onChange={handleInputChange}
                                className={`border-b outline-none focus:border-[var(--primary-color)] w-full transition-all ${errors.mcNumber ? 'border-red-500' : ''}`}
                            />
                            {errors.mcNumber && (
                                <p className='text-red-400 text-sm !mt-1 font-semibold'>{errors.mcNumber}</p>
                            )}
                        </div>

                        {/* Message  */}
                        <div className='group w-full gap-2 flex flex-col'>
                            <label htmlFor="message" className='font-semibold text-lg'>TELL US ABOUT YOUR NEED</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className='!py-2 !px-1 outline focus:outline-[var(--primary-color)] transition-all border rounded'
                                placeholder="Tell us about your dispatching needs..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='w-full bg-[var(--primary-color)] text-white font-semibold !py-2 rounded cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50'
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact