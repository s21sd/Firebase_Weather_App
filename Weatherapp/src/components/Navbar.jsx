import React from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className="text-gray-600 body-font m-4">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-10 rounded-xl' src={logo} alt='logo' />
                    <span className="ml-3 text-xl">Weather App</span>
                </div>


                <button onClick={() => navigate('/login')} className="inline-flex text-white items-end justify-end bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                </button>
            </div>
        </header>
    )
}

export default Navbar