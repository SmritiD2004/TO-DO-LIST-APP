import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between font-medium bg-blue-600 p-4 text-white rounded-lg shadow-lg">
      <div className="logo">
        <span className="font-bold text-xl mx-8">TaskIt</span>
      </div>
      <ul className="flex gap-6 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
      </ul>
    </nav>
  )
}
   
export default Navbar
