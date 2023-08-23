import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-950 text-white flex justify-between items-center h-[50px] px-10">
        <div className="flex gap-6 items-center">
            <NavLink to="/" className="text-2xl font-semibold">
                Navbar
            </NavLink>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/books/listing">
                Add Listing
            </NavLink>
        </div>
        <div className="flex gap-10">
            <NavLink to="/login" className="flex justify-center items-center text-lg h-[35px] w-[100px] bg-white text-blue-950 rounded-md hover:opacity-70 duration-300">LogIn</NavLink>
            <NavLink to="/register" className="flex justify-center items-center text-lg h-[35px] w-[100px] bg-white text-blue-950 rounded-md hover:opacity-70 duration-300">Register</NavLink>
        </div>
    </div>
  )
}

export default Navbar