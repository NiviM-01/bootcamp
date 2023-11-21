import mongoose from "mongoose";
 
const newEntollment = mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        emailid:{
            type:String,
            required:true
        },
        phonenumber:{
            type:Number,
            required:true
        }

    }
)
const newEntoll = mongoose.model('New Entrollment', newEntollment)
export default newEntoll;