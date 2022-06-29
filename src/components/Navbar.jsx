import React from 'react'
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className=' h-24 w-full  p-8 bg-gradient-to-l from-rose-900 via-rose-700 to-purple-500 shadow-lg flex justify-center align-middle items-center'>
        <img src={Logo} alt="" className='h-20 p-2' />
        <h1 className='mx-15 text-3xl font-bold text-white p-3'>Meme Generator</h1>
    </div>
  )
}

export default Navbar
