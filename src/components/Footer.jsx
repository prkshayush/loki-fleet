import React from 'react'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='w-full h-[50vh] bg-gray-900 flex justify-between gap-28 py-16 px-32' id="footer">
            <div className='flex flex-col flex-1 gap-5' id="copyright">
                <h2 className='text-xl font-bold uppercase'>LOKI's FLEET</h2>
                <p className='text-slate-400 font-semibold'>Drive exclusive vehicles and go on an adventure ride. Book yours now.</p>
                <p className='text-sm font-medium pt-8 text-gray-200'>Created by <span className='uppercase font-semibold text-lg text-cyan-500'>Ayush Prakash</span> © {year}<br />This is just another fun project. Please don't use without permission!</p>
            </div>
            <div className='flex flex-col flex-1 gap-5' id="workinghr">
                <h2 className='text-xl font-bold uppercase'>working hours</h2>
                <p className='text-slate-400 font-semibold'>Mon-Fri: 9 a.m - 11 p.m <br /> Sunday: closed <br /> Service available 24/7, across Galaxies</p>
            </div>
            <div className='flex flex-col flex-1 gap-5' id="newsletter">
                <h2 className='text-xl font-bold uppercase'>subscribe</h2>
                <p className='text-slate-400 font-semibold'>For latest updates & offers, subscribe to our newsletter</p>
                <input className='rounded-xl p-3 text-slate-300' type="text" name="e-mail" placeholder='Enter your email' id="mail" />
                <button className='bg-red-500 w-40 text-gray-100 text-xl font-bold p-3 rounded-xl drop-shadow-xl'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer