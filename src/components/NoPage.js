import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NoPage() {
  return (
    <div className='bg-[#ea8d8dd5] mx-auto flex flex-col justify-center items-center h-[70vh] m-10 w-[80%] rounded-md'>
      <h2 className='text-xl md:text-3xl font-bold font-mono '>404 Page Not Found</h2>
      <NavLink to="/" className="px-6 py-2 rounded-md text-white font-bold my-3 bg-violet-400 hover:bg-violet-500" > Go To Home Page</NavLink>
    </div>
  )
}
