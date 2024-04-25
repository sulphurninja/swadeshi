import React from 'react'
import Navbar from './Navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16">{children}</main>
            <footer className='bg-secondary-foreground  text-primary-foreground'>
                <div className=' grid grid-cols-1 lg:grid-cols-3'>
                <img src='/logo.png' className='h-12 m-4 dark:block hidden '/>
                <img src='/logo-dark.png' className='h-12 m-4 block dark:hidden'/>
                <div className={`p-4 ${inter.className} `}>
                        <h1 className='font-bold text-xl'>Administration Office</h1>
                       <address>Address goes here</address>
                    </div>
                    <div className={`p-4 ${inter.className} `}>
                        <h1 className='font-bold text-lg'>Swadeshi Standard Certificate</h1>
                        <nav className='p-3 grid text-xs md:text-sm  grid-cols-2'>
                            <h1>Privacy Policy</h1>
                            <h1>Disclaimer</h1>
                            <h1>Feedback</h1>
                            <h1>Terms of Business</h1>
                            <h1>Social Media Principle</h1>
                            <h1>Use of Logo</h1>
                        </nav>
                    </div>
                </div>
                <h1 className='text-center text-sm font-bold'>© All Rights Reserved - Swadeshi Standard Certificate</h1>

            </footer>
        </>
    )
}
