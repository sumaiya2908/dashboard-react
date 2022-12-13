const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()

app.use(cors())


app.listen(3500, () => {
	console.log("Server started at 3500")
})