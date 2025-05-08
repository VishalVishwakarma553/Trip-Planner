import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CompassIcon, LogOut, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser } from "@/redux/authSlice";
import axioInstance from "@/lib/axiosInstance";

const Navbar = ({setScroll}) => {
  const [IsOpen, setIsOpen] = useState(false)
  const {user} = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  const handleLogout = async() => {
    try{
      const res = await axioInstance.get("/user/logout")
      if (res.data.success){
        toast.success(res.data.message)
        dispatch(setUser(null))
      }
    }catch(error){
      console.log("Error in logout", error)
    }
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur w-full">
      <div className="  flex justify-between border-b items-center p-4">
        <div className="flex items-center gap-1">
        <CompassIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">TripGenius</h1>
        </div>
        <div className="hidden md:flex gap-6">
          <Link
            to={"/"}
            className="font-medium transition-colors hover:text-blue-500"
          >
            Home
          </Link>
          <p
            to="popular-destinations"
            className="font-medium transition-colors hover:text-blue-500"
            onClick={() => setScroll(true)}
          >
            Destinations
          </p>
          <Link
            to={"/History"}
            className="font-medium transition-colors hover:text-blue-500"
          >
            History
          </Link>
          <Link
            to={"/About"}
            className="font-medium transition-colors hover:text-blue-500"
          >
            About
          </Link>
        </div>
        <div className=" md:flex gap-2 hidden items-center">
          {
            !user ? (<Button >
              <Link to="/login">Login</Link>
            </Button>): (
              <div className="bg-gray-950  h-10 w-10 rounded-full flex justify-center items-center">
                <h1 className="text-xl text-white">{user.fullName.slice(0, 1).toUpperCase()}</h1>
              </div>
            )
          }
        
          {
            user ? <Button onClick={handleLogout} className="hover:scale-95 cursor-pointer">
              <LogOut className="w-4 h-4 mr-1" />
            Logout
          </Button>:
          <Button >
          <Link to="/trip-planning">Get started</Link>
        </Button>
          }

        
        </div>

        <Button className="md:hidden" onClick={() => setIsOpen(true)}>
          <MenuIcon></MenuIcon>
        </Button>
      </div>


      {/* Mobile view */}
      {IsOpen && <div className={`fixed top-0 right-0 w-64 z-50 shadow-lg bg-white transition-transform duration-500 ease-in-out ${IsOpen? "translate-x-0": "translate-x-full" } `}>
        <Button className="absolute top-4 right-4" onClick={() => {
          setIsOpen(false)
        }}>
          <XIcon />
        </Button>

        <div className="flex flex-col items-center gap-6 p-12  space-y-4">
        <Link
            to={"/"}
            className="font-medium transition-colors hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="font-medium transition-colors hover:text-blue-500"
            onClick={() => {
              setIsOpen(false)
              setScroll(true);
            }}
          >
            Destinations
          </Link>
          <Link
            to={"/History"}
            className="font-medium transition-colors hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            History
          </Link>
          <Link
            to={"/About"}
            className="font-medium transition-colors hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {
            !user && <Button >
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </Button>
          }
        <Button >
          <Link to="/trip-planning" onClick={() => setIsOpen(false)
          }>Get started</Link>
        </Button>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;
