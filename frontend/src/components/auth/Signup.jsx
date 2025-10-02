import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem} from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action={""}
          className="w-1/2 border border-grey-100 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter Your Name" className='my-2' />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter Your Email" className='my-2' />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Enter Your Number" className='my-2' />
          </div>
          <div>
            <Label>FullName</Label>
            <Input type="password" placeholder="Enter Your Password" className='my-2' />
          </div>
          <div className="flex items-center justify-between">
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
            <div className="flex items-center gap-2 mx-4">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer"/>
            </div>
          </div>
          <Button type='submit' className="bg-black text-white w-full my-4">Signup</Button>
          <span className="text-sm">Already have an Account ? <Link to='/login' className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    </>
  );
}

export default Signup;
