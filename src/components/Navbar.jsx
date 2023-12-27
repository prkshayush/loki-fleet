import React from 'react'

function Navbar() {
    return (
        <div className="fixed z-40 w-full px-10 py-2 flex justify-between">
            <div id="logo">
                <img className='h-24 w-24 rounded-full bg-red-500' src="./src/assets/mother.png" alt="logo-not-found" />
            </div>
            <ul className='flex h-2/3 items-center text-lg gap-5 p-5 backdrop-blur-3xl rounded-2xl'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Vehicles</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar