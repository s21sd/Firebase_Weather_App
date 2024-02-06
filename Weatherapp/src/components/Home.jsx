import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import Animation from "../../public/HDOskFySHs.json"
const Home = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} />
            <div className="text-gray-600 body-font ml-4">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Today's Forecast: Your Lifestyle, Our Priority..
                        </h1>
                        <p className="mb-8 leading-relaxed">Sun or snow, always be in the know,Your pocket meteorologist.</p>
                        <div className="flex justify-center">
                            <button onClick={() => navigate('/main')} className="inline-flex text-white m-2 bg-gradient-to-br from-pink-400 to-blue-300 border-0 py-2 px-6 focus:outline-none  rounded text-lg">Get Started</button>
                            <button onClick={() => navigate('/signup')} className="inline-flex text-white m-2 bg-gradient-to-br from-pink-400 to-blue-300 border-0 py-2 px-6 focus:outline-none rounded text-lg">Sign Up</button>

                        </div>
                    </div>
                    <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
                        <Lottie animationData={Animation} loop={true} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home