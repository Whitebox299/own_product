import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Register from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  
    <LoginPage/>
    <Register/>
   </div>
  )
}

export default App
