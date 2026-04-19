import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'


const page = () => {
    return (
        <div className='!'>
            <Header />
            {/* Title Section  */}
            <div className="title text-center flex-wrap h-[180px] bg-[#003d73] text-white !py-4 flex justify-center items-center flex-col gap-4">
                <h2 className='font-bold font-[Orbitron] text-3xl'>Privacy Policy</h2>
                <div className='md:w-full w-[70%]'>
                    <p>First Bridge Dispatch Services — Professional Truck Dispatching for Owner Operators</p>

                </div>

            </div>

            {/* Main  */}
            <div className='md:w-[600px] w-full !m-auto flex flex-col gap-10 !p-[10px]'>

                {/* home  */}

                <div className='text-[var(--primary-color)] items-center  font-bold flex gap-4 !mt-8'>
                    <ArrowLeft className='w-5 h-5' />
                    <Link href={'/'}>Back to Home</Link>

                </div>

                {/* Card  */}
                <div className='flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>Privacy Policy</h4>
                    <p className='font-bold'>Effective Date: <span className='font-light'>January 1, 2026</span></p>
                    <p>First Bridge Dispatch Services ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.</p>
                </div>
                {/* Card  */}
                <div className='flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>Information We Collect</h4>
                    <p>We may collect the following types of information:</p>
                    <ul className='list-disc flex flex-col !p-2'>
                        <li><span className='font-semibold'>Contact Information:</span> Name, phone number, email address, and MC/DOT number when you submit our contact form or sign up for dispatch services.</li>
                        <li> <span className='font-semibold'>Usage Data:</span> Pages visited, time spent on pages, and browser type collected automatically via standard web analytics.</li>
                        <li>
                            <span className='font-semibold'>Communication Records:</span> Records of emails, calls, or text messages between you and our dispatch team.

                        </li>
                    </ul>

                </div>
                {/* Card  */}
                <div className='flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>How We Use Your Information</h4>
                    <ul className='list-disc !p-2'>
                        <li>
                            To provide truck dispatching services and find loads for your truck

                        </li>
                        <li>
                            To communicate with you about loads, rates, and service updates

                        </li>
                        <li>
                            To send SMS messages if you have opted in to receive them

                        </li>
                        <li>
                            To improve our website and free trucking tools

                        </li>
                        <li>
                            To comply with legal obligations

                        </li>
                    </ul>


                </div>
                {/* Card  */}
                <div className='flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>SMS Communications</h4>
                    <p>If you opt in to receive SMS messages from First Bridge Dispatch Services, you agree to receive text messages related to our dispatch services, load updates, and business communications. Message frequency varies. Message and data rates may apply. You may opt out at any time by replying STOP. For help, reply HELP. See our SMS Policy for full details.</p>
                    <p><span className='font-semibold'>Mobile opt-in data and consent will not be shared with, sold to, or used by third parties or affiliates for marketing or promotional purposes.</span> Mobile information is used solely to deliver the specific communications you have consented to receive from First Bridge Dispatch Services. We do not purchase, sell, or exchange mobile opt-in lists. Each individual's consent applies only to communications from First Bridge Dispatch Services.</p>



                </div>
                {/* Card  */}
                <div className='flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>Data Sharing</h4>
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, subject to confidentiality agreements.</p>



                </div>
                   {/* Card  */}
                   <div className='!mb-10 flex shadow-2xl flex-col gap-4 md:!p-6 !p-3 rounded-2xl border-l-2 border-[var(--primary-color)]'>
                    <h4 className='text-[#004e89] text-xl font-semibold font-[Orbitron]'>Contact Us</h4>
                    <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@firstbridgedispatch.com">info@firstbridgedispatch.com</a> or through our <Link className='text-[var(--primary-color)] font-bold' href={'/#contact'}>contact form</Link> .</p>



                </div>
            </div>

            <Footer />

        </div>
    )
}

export default page
