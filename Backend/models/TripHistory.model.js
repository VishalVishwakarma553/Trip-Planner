import mongoose from "mongoose";

const TripHistorySchema = new mongoose.Schema({
    destination: {
        type: String,
    },
    description:{
        type: String
    },
    transportation: [{
        mode: {type: String, default: ""},
        price: {type: String, default: ""},
        duration: {type: String, default: ""},
    }],
    accommodations: [{
        name: {type: String, default: ""},
        price: {type: String, default: ""},
    }],
    attractions: [{
        name: {type: String, default: ""},
        description: {type: String, default: ""}
    }],
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const TripHistory = mongoose.model("TripHistory", TripHistorySchema)
export default TripHistory