import React from 'react'
import Course from '../Components/Course'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
   
    <Footer/>
    </>
  )
}

export default courses
