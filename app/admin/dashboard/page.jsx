"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore'

const AdminDashboard = () => {
    const [contactForms, setContactForms] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('recent')
    const [selectedForm, setSelectedForm] = useState(null)
    const [isDeleteConfirm, setIsDeleteConfirm] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const router = useRouter()

    // Check authentication
    useEffect(() => {
        const auth = localStorage.getItem('adminAuth')
        if (!auth) {
            router.push('/admin/login')
        }
    }, [router])

    // Fetch contact forms from Firestore
    useEffect(() => {
        const fetchContactForms = async () => {
            try {
                setIsLoading(true)
                const q = query(collection(db, 'contactForms'), orderBy('submittedAt', 'desc'))
                const querySnapshot = await getDocs(q)
                
                const forms = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    submittedAt: doc.data().submittedAt?.toDate() || new Date()
                }))

                setContactForms(forms)
                setError('')
            } catch (err) {
                console.error('Error fetching forms:', err)
                setError('Failed to load contact forms')
            } finally {
                setIsLoading(false)
            }
        }

        fetchContactForms()
    }, [])

    // Filter and sort forms
    const filteredForms = contactForms
        .filter(form =>
            form.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.phone.includes(searchTerm)
        )
        .sort((a, b) => {
            if (sortBy === 'recent') {
                return b.submittedAt - a.submittedAt
            } else if (sortBy === 'oldest') {
                return a.submittedAt - b.submittedAt
            } else if (sortBy === 'name') {
                return (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
            }
            return 0
        })

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('adminAuth')
        router.push('/admin/login')
    }

    // Handle delete
    const handleDelete = async () => {
        if (!deleteId) return

        try {
            await deleteDoc(doc(db, 'contactForms', deleteId))
            setContactForms(contactForms.filter(form => form.id !== deleteId))
            setIsDeleteConfirm(false)
            setDeleteId(null)
            setSelectedForm(null)
        } catch (err) {
            console.error('Error deleting form:', err)
            setError('Failed to delete form')
        }
    }

    // Format date
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Header */}
            <div className='bg-[var(--primary-color)] text-white shadow-lg'>
                <div className='max-w-7xl mx-auto px-4 py-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
                            <p className='text-blue-100 mt-1'>Contact Form Submissions</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className='bg-white text-[var(--primary-color)] px-6 !py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 py-8'>
                {/* Error Message */}
                {error && (
                    <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
                        {error}
                    </div>
                )}

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    <div className='bg-white rounded-lg shadow p-6'>
                        <p className='text-gray-600 text-sm font-semibold'>Total Submissions</p>
                        <p className='text-4xl font-bold text-[var(--primary-color)] mt-2'>{contactForms.length}</p>
                    </div>
                    <div className='bg-white rounded-lg shadow p-6'>
                        <p className='text-gray-600 text-sm font-semibold'>Filtered Results</p>
                        <p className='text-4xl font-bold text-blue-600 mt-2'>{filteredForms.length}</p>
                    </div>
                    <div className='bg-white rounded-lg shadow p-6'>
                        <p className='text-gray-600 text-sm font-semibold'>Last Submission</p>
                        <p className='text-lg font-semibold text-gray-700 mt-2'>
                            {contactForms.length > 0 ? formatDate(contactForms[0].submittedAt) : 'No submissions'}
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className='bg-white rounded-lg shadow p-6 mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Search</label>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='Search by name, email, or phone...'
                                className='w-full px-4 !py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className='w-full px-4 !py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]'
                            >
                                <option value="recent">Most Recent</option>
                                <option value="oldest">Oldest First</option>
                                <option value="name">Name (A-Z)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]'></div>
                            <p className='mt-4 text-gray-600'>Loading submissions...</p>
                        </div>
                    </div>
                ) : filteredForms.length === 0 ? (
                    <div className='bg-white rounded-lg shadow p-12 text-center'>
                        <p className='text-gray-500 text-lg'>No contact forms found</p>
                    </div>
                ) : (
                    /* Contact Forms Table */
                    <div className='bg-white rounded-lg shadow overflow-hidden'>
                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-gray-100 border-b-2 border-gray-200'>
                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Name</th>
                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Email</th>
                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Phone</th>
                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>MC Number</th>
                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Is Subscribe</th>

                                        <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Submitted</th>
                                        <th className='px-6 py-4 text-center text-sm font-semibold text-gray-700'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredForms.map((form) => (
                                        <tr key={form.id} className='border-b hover:bg-gray-50 transition-colors'>
                                            <td className='px-6 py-4'>
                                                <div className='font-semibold text-gray-900'>{form.firstName} {form.lastName}</div>
                                            </td>
                                            <td className='px-6 py-4 text-gray-700'>{form.email}</td>
                                            <td className='px-6 py-4 text-gray-700'>{form.phone}</td>
                                            <td className='px-6 py-4 text-gray-700 font-mono'>{form.mcNumber}</td>
                                            <td className='px-6 py-4 text-gray-700 font-mono'>{form.isSubscribe === true ? "Yes" : "No"}</td>

                                            <td className='px-6 py-4 text-gray-600 text-sm'>{formatDate(form.submittedAt)}</td>
                                            <td className='px-6 py-4 text-center'>
                                                <div className='flex justify-center gap-3'>
                                                    <button
                                                        onClick={() => setSelectedForm(form)}
                                                        className='bg-blue-500 text-white px-4 !py-2 rounded hover:bg-blue-600 transition-colors text-sm font-semibold'
                                                    >
                                                        View
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setDeleteId(form.id)
                                                            setIsDeleteConfirm(true)
                                                        }}
                                                        className='bg-red-500 text-white px-4 !py-2 rounded hover:bg-red-600 transition-colors text-sm font-semibold'
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedForm && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
                    <div className='bg-white rounded-lg shadow-2xl max-w-md w-full p-8'>
                        <h2 className='text-2xl font-bold text-[var(--primary-color)] mb-6'>Form Details</h2>

                        <div className='space-y-4'>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Full Name</p>
                                <p className='text-lg text-gray-900'>{selectedForm.firstName} {selectedForm.lastName}</p>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Email</p>
                                <p className='text-lg text-gray-900 break-all'>{selectedForm.email}</p>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Phone</p>
                                <p className='text-lg text-gray-900'>{selectedForm.phone}</p>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-600'>MC Number</p>
                                <p className='text-lg text-gray-900'>{selectedForm.mcNumber}</p>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Message</p>
                                <p className='text-gray-900 bg-gray-50 p-3 rounded mt-2'>{selectedForm.message || 'No message'}</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>IS Subscribe</p>
                                <p className='text-gray-900 bg-gray-50 p-3 rounded mt-2'>{selectedForm.isSubscribe === true ? "Yes" : "No"}</p>
                            </div>
                            

                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Submitted At</p>
                                <p className='text-gray-900'>{formatDate(selectedForm.submittedAt)}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedForm(null)}
                            className='w-full mt-6 bg-[var(--primary-color)] text-white font-semibold !py-2 rounded hover:opacity-90 transition-opacity'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteConfirm && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
                    <div className='bg-white rounded-lg shadow-2xl max-w-sm w-full p-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Confirm Delete</h2>
                        <p className='text-gray-700 mb-6'>Are you sure you want to delete this form submission? This action cannot be undone.</p>

                        <div className='flex gap-4'>
                            <button
                                onClick={() => {
                                    setIsDeleteConfirm(false)
                                    setDeleteId(null)
                                }}
                                className='flex-1 bg-gray-300 text-gray-900 font-semibold !py-2 rounded hover:bg-gray-400 transition-colors'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className='flex-1 bg-red-600 text-white font-semibold !py-2 rounded hover:bg-red-700 transition-colors'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDashboard