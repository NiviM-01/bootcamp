import mongoose from 'mongoose'

const newCoures = mongoose.Schema({
    userid:{
    type: String,
    required: true
},
    coursename: {
    type: String,
    required: true,
},
    description: {
    type: String,
    required: true,
},
    date: {
    type: String,
},
    status: {
    type: String,
    required: true,
},
})
const addedCoures = mongoose.model('newCoures', newCoures)
export default addedCoures;