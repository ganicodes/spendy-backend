const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const cors = require('cors')
const connectToDb = require('./database/db')

dotenv.config()

const port = 3000
const app = express();

// middlwares
app.use(express.json());
app.use(cors({
    origin: ['http://ec2-3-110-128-72.ap-south-1.compute.amazonaws.com', 'http://localhost:5173', "*"],
    methods: "GET,POST,PUT,DELETE,HEAD,DELETE",
    credentials: true,
}));

// routes
app.use('/api', require('./routes/routeIndex'))

// default
app.get("/", (req, res) => {
    res.send("Up and working")
})


app.listen(port, () => {
    connectToDb()
    console.log(`Server running at ${port}`)
})