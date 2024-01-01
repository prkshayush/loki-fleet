import React from 'react'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='w-full h-full md:h-[50vh]  bg-gray-900 md:flex justify-between md:gap-28 gap-10 md:py-16 md:px-32 p-5' id="footer">
            <div className='flex flex-col md:flex-1 md:gap-5 gap-2 p-3' id="copyright">
                <h2 className='md:text-xl text-lg font-bold uppercase'>LOKI's FLEET</h2>
                <p className='text-slate-400 font-semibold md:text-base text-sm'>Drive exclusive vehicles and go on an adventure ride. Book yours now.</p>
                <p className='md:text-sm text-xs font-medium md:pt-8 text-gray-200'>Created by <span className='uppercase font-semibold md:text-lg text-base text-cyan-500'>Ayush Prakash</span> © {year}<br />This is just another fun project. Please don't use without permission!</p>
            </div>
            <div className='flex flex-col md:flex-1 md:gap-5 gap-2 p-3' id="contact">
                <h2 className='md:text-xl text-lg font-bold uppercase'>working hours</h2>
                <p className='text-slate-400 font-semibold md:text-base text-sm'>Mon-Fri: 9 a.m - 11 p.m <br /> Sunday: closed <br /> Service available 24/7, across Galaxies <br />
                In case of query, send your questions at: <span className='text-cyan-400 cursor-pointer'>godofmichief@asguardian.loki.com</span>
                </p>

            </div>
            <div className='flex flex-col md:flex-1 md:gap-5 gap-2 p-3' id="newsletter">
                <h2 className='md:text-xl text-lg font-bold uppercase'>subscribe</h2>
                <p className='text-slate-400 font-semibold md:text-base text-sm'>For latest updates & offers, subscribe to our newsletter</p>
                <input className='rounded-xl p-3 md:text-base text-sm text-center text-slate-300' type="text" name="e-mail" placeholder='Enter your email' id="mail" />
                <button className='bg-red-500 w-24 md:w-40 text-gray-100 md:text-xl text-sm md:font-bold font-semibold p-3 rounded-xl drop-shadow-xl'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer