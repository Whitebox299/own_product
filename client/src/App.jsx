import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from './pages/LoginPage'
import Register from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  
  <Router>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <Link to="/">Home</Link>
        <div>
          <Link to="/register" className="mr-4">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
