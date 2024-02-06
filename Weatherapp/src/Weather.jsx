import React, { useState, useEffect } from 'react'
import { CgDarkMode } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import sunset from '../src/assets/sunset-white 1.png'
import sunrise from '../src/assets/sunrise-white 1.png'
import sun from '../src/assets/clear 1.png'
import wind from '../src/assets/wind 1.png'
import uv from '../src/assets/uv-white 1.png'
import pressure from '../src/assets/pressure-white 1.png'
import humidity from '../src/assets/humidity 1.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Weather = () => {
    const navigate = useNavigate();
    const [seachCity, setSearchCity] = useState('Lucknow');
    const [data, setData] = useState('');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const fectchApi = () => {
        axios.get(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${seachCity}`, options)
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    // useEffect(() => {
    //     fectchApi();
    // }, [seachCity])
    return (
        <div className='m-10 p-10'>
            <div className='flex justify-between items-center'>
                <CgDarkMode style={{ fontSize: '2em', marginLeft: '4' }} />
                <div className='bg-gray-200 w-fit p-3 h-fit flex justify-center items-center rounded-2xl gap-2'>
                    <FaSearch onClick={fectchApi} style={{ fontSize: '2em', marginLeft: '4' }} />
                    <input onChange={(e) => setSearchCity(e.target.value)} className='bg-gray-200 ml-2 p-1 rounded-2xl' placeholder='Search' type='text' />
                </div>
                <button onClick={() => navigate('/getinfo')}>Get Activity</button>

            </div>


            <div className='flex justify-between items-center m-10 shadow-lg bg-gradient-to-br from-pink-200 to-blue-100 p-10 rounded-lg '>

                <div>
                    <h1 className='font-bold text-8xl'>{data.temp}&deg;C.</h1>
                    <p className='font-semibold text-3xl ml-10'>{data.feels_like}&deg;C.</p>


                    <div className='flex font-semibold m-4'>

                        <img src={sunrise} alt='sunset' />
                        <div className='ml-4'>

                            <h1 className='font-semibold text-3xl'>Sunsine</h1>
                            <p>{data.sunrise}</p>
                        </div>
                    </div>
                    <div className='flex font-semibold m-4'>
                        <img src={sunset} alt='sunset' />
                        <div className='ml-4'>
                            <h1 className='font-semibold text-3xl'>Sunset</h1>
                            <p>{data.sunset}</p>
                        </div>
                    </div>
                </div>

                <div className='grid '>
                    <img src={sun} alt='sunimg' />
                    <h1 className=' text-center font-semibold text-3xl'>{seachCity}</h1>

                </div>


                <div className='flex gap-4 font-semibold text-xl '>
                    <div className='grid gap-4 m-2'>
                        <div>
                            <img src={humidity} alt='sunimg' />
                            <h2>{data.humidity}%</h2>
                            <h1>Humidity</h1>
                        </div>
                        <div>
                            <img src={wind} alt='sunimg' />
                            <h2>{data.wind_speed}km/h</h2>
                            <h1>wind speed</h1>
                        </div>

                    </div>
                    <div className='grid m-2 gap-4'>
                        <div>
                            <img src={pressure} alt='sunimg' />
                            <h2>{data.wind_degrees}%</h2>
                            <h1>Pressure</h1>
                        </div>
                        <div>
                            <img src={uv} alt='sunimg' />
                            <h2>MinTemp:{data.min_temp}</h2>
                            <h2>MaxTemp:{data.max_temp}</h2>
                            <h2>Cloud Pct:{data.cloud_pct}</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather