import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Navbar/>
    <div className='flex item-center justify-center max-w-7xl mx-auto'>
      <form action="" className='w-1/2 border border-grey-400 rounded-md p-4 my-10'>
      <h1 className='font-bold text-xl mb-5'>Login</h1>
        <div>
          <Label>Email</Label>
          <Input type='text' placeholder='Enter Your Name' className= 'my-2'/>
        </div>
        <div>
          <Label>Password</Label>
          <Input type='password' placeholder='Enter Your Password' className='my-2'/>
        </div>
        <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Student</Label>
              </div>
            </RadioGroup>
            <Button type='submit' className="bg-black text-white w-full my-4">Login</Button>
            <span className="text-sm">Don't have an Account ? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
      </form>
    </div>
    </>
  )
}

export default Login