import mongoose from 'mongoose'

const newCouresContent = mongoose.Schema({
    courseid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,

    },
    resourse: {
        type: String,
        required: true,
    },
})
const couresContent = mongoose.model('Coures Content', newCouresContent)
export default couresContent;