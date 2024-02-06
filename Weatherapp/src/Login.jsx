import React, { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from './components/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import '../src/Login.css'

const Login = ({ onlogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {

                    toast.success('Login successful!');
                    onlogin();
                    setTimeout(() => {
                        navigate('/main');
                    }, 2000)

                }
            })
            return () => unsubscribe();

        } catch (error) {
            toast.error('Somethign went wrong!');
            console.error('Error signing in:', error.message);

        }
    }

    return (
        <div>
            <ToastContainer />

            <form className='formo' onSubmit={handleSignIn}>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Enter email address..." id="username" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button className='cursor-pointer bg-gradient-to-br from-pink-400 to-blue-300'>Log In</button>


            </form>


        </div>
    )
}

export default Login