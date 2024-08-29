import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLeyout() {
  return (
  <div className='flex'>
   <Navbar/>
   <Outlet/>
  </div>
  )
}

export default MainLeyout