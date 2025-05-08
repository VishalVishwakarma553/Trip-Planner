import TripHistory from "../models/TripHistory.model.js"

export const TripHistoryController = async(req, res) => {
    try{
        const {destination, description, transportation, accommodations, attractions} = req.body
        const newTrip = new TripHistory({
            destination,
            description,
            transportation,
            accommodations,
            attractions,
            UserId:req.id
        })
        await newTrip.save()
        return res.status(200).json({newTrip,
            success: true,
            message: "Trip saved successfully"
        })
    }catch(error){
        console.log("Error in saving trip history", error )
    }
}

export const getTrip = async(req, res) => {
    try{
        const userId = req.id
        const trips = await TripHistory.find({UserId:userId})
        if(!trips){
            return res.status(400).json({message: "There are no trips you have made"})
        }
        return res.status(200).json({trips, success: true})
    }catch(error){
        console.log("Error in getting trip", error)
    }
}