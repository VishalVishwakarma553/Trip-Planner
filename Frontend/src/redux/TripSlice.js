import { createSlice } from "@reduxjs/toolkit"
const TripSlice = createSlice({
    name: "TripSlice",
    initialState:{
        trip: null,
        tripFromDB:[] 
    },
    reducers:{
        setTrip:(state, action) => {
            state.trip = action.payload
        },
        settripFromDB: (state, action) => {
            state.tripFromDB = action.payload
        }
    }
})
export const {setTrip, settripFromDB} = TripSlice.actions
export default TripSlice.reducer