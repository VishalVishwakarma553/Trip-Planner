import axioInstance from "@/lib/axiosInstance"
import { settripFromDB } from "@/redux/TripSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAllTrip = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetch = async() => {
            try{
                const res = await axioInstance.get("/trip/getTrip")
                console.log("response of trip from database", res?.data?.trips)
                if(res.data.success){
                    dispatch(settripFromDB(res?.data?.trips))
                }
            }catch(error){
                console.log("Error in fetching trip",error)
            }
        }
        fetch()
    }, [])
}
export default useGetAllTrip