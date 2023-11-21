import mongoose from 'mongoose'

const SignupDetails=mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    confrimemail:{
        type:String,
        required:true,
       
    },
    firstname:{
        type:String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
    
    },
    role:{
        type:String,
        required:true,
    
    },
    city:{
        type:String,
        required:true,
    
    },
    country:{
        type:String,
        required:true,
        
    }
})
const Signup = mongoose.model('AdminDetails',SignupDetails)
export default Signup;