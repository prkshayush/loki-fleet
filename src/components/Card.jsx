import React from 'react'
import { vehicles } from '../vehicle-data'

function Card() {
  return (
    <div className='w-full min-h-screen grid place-items-center gap-20 py-20 text-center bg-gradient-to-b from-background to-background-two' id="scaletext">
      {
        vehicles.map((vehicle, index) => {
          return (
            <div key={index} className="w-3/5 h-[30rem] flex rounded-3xl justify-center gap-5 pt-5 p-8 bg-gray-900 flex-col backdrop-blur-sm">
              <h2 className='text-5xl font-bold flex-1 uppercase' >{vehicle.title}</h2>
              <div className='flex-1 flex justify-between items-center gap-5'>
                <div className='flex-1 flex flex-col gap-3 p-2'>
                  <p className='font-semibold text-justify text-slate-200'>{vehicle.description}</p>
                  <p className='text-left font-light text-cyan-400'>"{vehicle.avaiability}"</p>
                  <button className='bg-red-500 text-slate-300 text-xl font-semibold p-2 w-32 rounded-lg'>Book Now</button>
                </div>
                <img className='w-[30rem] h-[18rem] flex-1 bg-slate-800 drop-shadow-xl rounded-xl' src={vehicle.image} alt="error" />
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Card


