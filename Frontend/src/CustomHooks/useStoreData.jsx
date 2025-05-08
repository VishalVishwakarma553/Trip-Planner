import axioInstance from "@/lib/axiosInstance"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const useStoreData = () => {
    const {trip} = useSelector((store) => store.trip)
    useEffect(() => {
        const save = async() => {
            console.log("From trip store",trip)
            try{
                const res = await axioInstance.post("/trip/newTrip", trip)
                console.log("After Saving the data",  res?.data?.newTrip)
            }catch(error){
                console.log("Error in saving the trip in database", error)
            }
        }
        if (trip) save();
    }, [trip])
}
export default useStoreData