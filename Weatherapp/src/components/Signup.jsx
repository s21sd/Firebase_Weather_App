import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            toast.success("Account Created Successfully");
            setTimeout(() => {

                toast.success(`Login to your account`);
            }, 1000)

            setTimeout(() => {
                navigate('/login');
            }, 4000)

        } catch (error) {
            toast.error(error.message);
            console.error('Error signing up:', error.message);
        }
    };

    return (

        <div>

            <ToastContainer />

            <form className='formo'>
                <h3>Signup Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Enter email address..." id="username" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button className='bg-gradient-to-br from-pink-400 to-blue-300 cursor-pointer' onClick={handleSignUp}>Sign Up</button>

                <div className="social flex justify-end mt-3  ">
                    <div className="text-xl cursor-pointer bg-gradient-to-br from-pink-400 to-blue-300 rounded-lg text-black p-2"><i className="fab fa-facebook"></i><Link to="/login">Login</Link></div>
                </div>
            </form>


        </div>

    )
}
export default Signup