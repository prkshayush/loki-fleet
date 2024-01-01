import React from 'react'

function Navbar() {
    return (
        <div className="fixed z-50 w-full p-2 md:px-10 flex justify-between">
            <div id="logo">
                <img className='h-16 w-16 md:h-20 md:w-20 rounded-full drop-shadow-xl' src="/src/assets/horns.png" alt="logo-not-found" />
            </div>
            <ul className='flex md:h-2/3 h-1/2 items-center md:text-lg text-sm gap-5 p-5 backdrop-blur-3xl rounded-2xl' id='navItems'>
                <li><a href="/">Home</a></li>
                <li><a href="#vehicles">Vehicles</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar