import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className= 'bg-red-500 text-green-200'>Let Us Build Job Portal</h1>
      <Navbar/>
    </>
  )
}

export default App
