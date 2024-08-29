import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[100vh] bg-[#10141e] flex flex-col justify-center items-center'>
        <div className='w-[70px] bg-[#161d2f] h-[93vh] flex flex-col justify-between items-center rounded-[10px] m-[30px]'>
            <div>
                <div className='p-[18px]'>
                <NavLink to="/"><img className='w-[50px]' src="   https://cdn-icons-png.flaticon.com/512/3665/3665969.png  " alt="" /></NavLink>
                </div>
                <div className='flex flex-col items-center mt-[30px] gap-[30px]'>
                <NavLink to="/"><img className='w-[20px] text-white' src="     https://cdn-icons-png.flaticon.com/512/16787/16787237.png " alt="" /></NavLink>
                <NavLink to="/1"><img className='w-[20px]' src="     https://cdn-icons-png.flaticon.com/512/1179/1179069.png  " alt="" /></NavLink>
                <NavLink to="/2"><img className='w-[20px]' src="     https://cdn-icons-png.flaticon.com/512/1023/1023521.png " alt="" /></NavLink>
                <NavLink to="/3"><img className='w-[20px]' src="      https://cdn-icons-png.flaticon.com/512/892/892340.png " alt="" /></NavLink>
                </div>
            </div>
            <div className='p-[18px]'>
            <NavLink><img className='w-[50px]' src="   https://cdn-icons-png.flaticon.com/512/4140/4140037.png " alt="" /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar