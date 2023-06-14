// const mongoose = require('../../DB/connection.js')

// const Schema = mongoose.Schema

const checkUser = (user) => {
    let passed = true
    if (!user.email || typeof user.email !== 'string') passed = false
    if (!user.firstName || typeof user.firstName !== 'string') passed = false
    if (!user.lastName || typeof user.lastName !== 'string') passed = false
    return passed
}

// const User = new Schema({
//     email: {type: String, required: true, unique: true},
//     firstName: {type: String, required: true},
//     lastName: {type: String, required: true},
//     lastOilChange: {date: Date, milage: Number},
//     lastBrakeChange: Date,
//     lastTuneUp: Date,
//     lastSafetyInspection: Date,
//     cars: [{
//         type: Schema.Types.ObjectId,
//         ref: "Car"
//     }],
// })

// const userModel = mongoose.model('User', User)

module.exports = checkUser