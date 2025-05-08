import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import axioInstance from "@/lib/axiosInstance";
import { setUser } from "@/redux/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  })
  const onChangeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const dispatch = useDispatch()
  const {user} = useSelector((store) => store.auth)
  const onSubmitHandler = async(e) => {
    e.preventDefault()
    try{
      const res = await axioInstance.post("/user/signup", formData)
      if (res?.data?.success){
        toast.success(res.data.message,  {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        })
        dispatch(setUser(res?.data?.newUser))
        console.log("from response",res?.data?.newUser)
        
      }
      console.log("from store", user)
    }catch(error){
      toast.error(error.res.data,  {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      })
      console.log("error in login", error)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <motion.Card 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{duration:.5}}
      className="md:w-[40%] mx-2 sm:mx-0 w-[80%] border border-gray-400 p-4 rounded-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className=" text-2xl">Signup</CardTitle>
          <CardDescription>Signup to your account to make trip</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmitHandler} >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="what is your name" type="text"
                name="fullName" value={formData.fullName} onChange={onChangeHandler}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="what is your name" name="email" value={formData.email} onChange={onChangeHandler} type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  id="name"
                  placeholder="what is your password"
                  type="password"
                  name="password" value={formData.password} onChange={onChangeHandler}
                />
              </div>
              <div className="w-full">
                <Button variant="outline" className="w-full" type="submit" >
                  Signup
                </Button>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Doesn't have account:
                <Link to="/Login">
                  {" "}
                  <span className="text-blue-500 underline">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </motion.Card>
    </div>
  );
};

export default Signup;
