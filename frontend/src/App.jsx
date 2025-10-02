import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  { 
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
