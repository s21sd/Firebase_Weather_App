import './App.css'
import Home from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './Login';
import Weather from './Weather';
import Table from './Table';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Weather />} />
          <Route path="/info" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
