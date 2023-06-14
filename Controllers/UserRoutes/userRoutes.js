const express = require('express')
const router = express.Router()
const checkUser = require('../../Models/UserModels/User')

const db = require('../../DB/connection')

const userRef = db.collection('users');

router.get('/', async (req, res) => {
    try {
        const users = await userRef.get()
        console.log(users._docs())
        res.json(users._docs())
    } catch (error) {
        console.error(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await userRef.doc(req.params.id).get()
        console.log(user)
        res.json(user)
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async (req, res) => {
    let dataUser = ""
    try {
        // console.log(req.body)
        if (checkUser(req.body)) {
            req.body.cars = []
            req.body.lastOilChange = ""
            req.body.lastBrakeChange = ""
            req.body.lastTuneUp = ""
            dataUser = await userRef.add(req.body)
            res.json(dataUser)
        } else {
            res.send("Failed").status(400)
        }
    } catch (error) {
        console.error(error)
    }
})

module.exports = router

//fOWil5XZpJUHgTfHLwH9