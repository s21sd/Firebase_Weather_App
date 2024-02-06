import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    return (
        <header className="text-gray-600 body-font m-4">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-3xl font-bold">Weather App</span>
                </div>

                {
                    isLoggedIn ?
                        <></> : <button onClick={() => navigate('/login')} className="inline-flex text-white items-end justify-end bg-gradient-to-br from-pink-400 to-blue-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                        </button>
                }
            </div>
        </header>
    )
}

export default Navbar