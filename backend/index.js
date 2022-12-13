const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()

app.use(cors())

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

app.get("/get-data", (req, res) => {
	db.collection('device-data').find({}).toArray(function (err, data) {
		res.send(data)
	})
});

app.listen(3500, () => {
	console.log("Server started at 3500")
})