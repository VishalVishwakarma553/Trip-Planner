import './index.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TripPlan from './Pages/TripPlan'
import Test from './Pages/Test'
import TripDetails from './Pages/TripDetails'
import About from './Pages/AboutPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Toaster } from 'react-hot-toast'
import History from './Pages/History'
import { useSelector } from 'react-redux'
function App() {
  const {user} = useSelector((store) => store.auth)
  return (
    <div >
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/trip-planning' element={user?<TripPlan></TripPlan>:<Navigate to={"/"}></Navigate>}></Route>
      <Route path='/test' element={<Test />}></Route>
      <Route path='/trip-details' element={<TripDetails />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/History' element={user?<History />:<Navigate to={"/"}></Navigate>}></Route>
    </Routes>
    <Toaster position="bottom-right"
  reverseOrder={false}/>
    </div>
  )
}

export default App
