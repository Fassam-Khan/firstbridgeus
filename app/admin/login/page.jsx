"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AdminLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    // Admin credentials (in production, use proper authentication)
    const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin'
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // Validate credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Store auth token in localStorage
            localStorage.setItem('adminAuth', JSON.stringify({
                isAuthenticated: true,
                username: username,
                timestamp: new Date().getTime()
            }))

            // Redirect to dashboard
            router.push('/admin/dashboard')
        } else {
            setError('Invalid username or password')
        }

        setIsLoading(false)
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-[var(--primary-color)] to-blue-900 flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-lg shadow-2xl p-8'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold text-[var(--primary-color)] mb-2'>Admin Panel</h1>
                        <p className='text-gray-600'>Sign in to access the dashboard</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm font-semibold'>
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Username Field */}
                        <div>
                            <label htmlFor="username" className='block text-sm font-semibold text-gray-700 mb-2'>
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors'
                                placeholder='Enter your username'
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className='block text-sm font-semibold text-gray-700 mb-2'>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors'
                                placeholder='Enter your password'
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className='w-full bg-[var(--primary-color)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer'
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className='mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200'>
                        <p className='text-xs font-semibold text-blue-800 mb-2'>Demo Credentials:</p>
                        <p className='text-xs text-blue-700'>Username: <span className='font-mono font-semibold'>admin</span></p>
                        <p className='text-xs text-blue-700'>Password: <span className='font-mono font-semibold'>admin123</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin