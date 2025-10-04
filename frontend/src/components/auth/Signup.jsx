import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "../../../utils/constant.js";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/authSlice.js";
import { Loader2 } from "lucide-react"; 


function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const {loading} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("fullname",input.fullname)
    formData.append("email",input.email)
    formData.append("phoneNumber",input.phoneNumber)
    formData.append("password",input.password)
    formData.append("role",input.role)
    if(input.file){
      formData.append("file",input.file)
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers:{
        "Content-Type":"multipart/form-data"
      },
        withCredentials:true
    });
    if(res.data.success){
      navigate("/login");
      toast.success(res.data.message)
    }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally{
      dispatch(setLoading(false));
    }
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-grey-100 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter Your Name"
              className="my-2"
              name="fullname"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
              className="my-2"
              name="email"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter Your Number"
              className="my-2"
              name="phoneNumber"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
              className="my-2"
              name="password"
            />
          </div>
          <div 
          className="flex items-center justify-between">
            <RadioGroup 
            className="flex items-center gap-4 my-5">
              <div 
              className="flex items-center space-x-2">
                <Input 
                type="radio" 
                name="role" 
                value="recruiter" 
                checked={input.role === "recruiter"} 
                onChange={changeEventHandler}className="cursor-pointer"/>
                <Label htmlFor="r1">Recruiter</Label>
              </div>
              <div 
              className="flex items-center space-x-2">
                <Input 
                type="radio" 
                name="role" 
                checked={input.role === "student"} 
                onChange={changeEventHandler} 
                value="student" 
                className="cursor-pointer"/>
                <Label htmlFor="r2">Student</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2 mx-4">
              <Label>Profile</Label>
              <Input 
              accept="image/*"
              type="file" 
              className="cursor-pointer" 
              onChange={changeFileHandler } />
            </div>
          </div>
          {
            loading ? <Button className="bg-black text-white w-full my-4 cursor-pointer"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please wait</Button>:<Button
            type="submit" 
            className="bg-black text-white w-full my-4 cursor-pointer"
          >
            Signup
          </Button>
          }
          <span className="text-sm">
            Already have an Account ?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Signup;
