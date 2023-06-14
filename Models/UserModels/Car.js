const mongoose = require('../../DB/connection.js')

const Schema = mongoose.Schema

const Car = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: String
})

const carModel = mongoose.model('Car', Car)

module.exports = carModel