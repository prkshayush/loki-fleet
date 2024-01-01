import React, { useState } from 'react'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative md:hidden'>
            <button className="fixed z-[52] flex-col justify-center item-center m-3 left-1/2" onClick={handleClick}>
                <span className={`bg-red-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : ' -translate-y-1'}`}></span>
                <span className={`bg-red-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-red-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : ' translate-y-1'}`}></span>
            </button>
            {
                isOpen ? 
                <div className='fixed z-[49] grid place-items-center w-full h-[20rem] rounded-b-full bg-cyan-600 gap-4 p-10' style={{
                    opacity: "0.95"
                }}>
                    <li></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="#vehicles">Vehicles</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div> : null
            }

        </div>

    )
}

export default Menu