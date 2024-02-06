import './App.css'
import { useState } from 'react';
import Home from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './Login';
import Weather from './Weather';
import Table from './Table';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);

  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login onlogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={isLoggedIn ? <Weather /> : <Login onlogin={handleLogin} />} />
          <Route path="/getinfo" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
