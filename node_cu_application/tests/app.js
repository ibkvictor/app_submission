// -- global packages --
const express = require('express')
const dotenv = require('dotenv')
const path = require("path")
const bcrypt = require("bcryptjs") // authentication
const sql = require("mysql")

// -- database connection --
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
    useCreateIndex:true
    }).then(() => {
        console.log(`DB CONNECTED!!!!!`)
     })

// -- local packages --
const authRoutes = require("./routes/auth")

// -- middleware --
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// ======PORT ======
const port = process.env.PORT || 8000;
//====== STARTING A SERVER ======
app.listen(port, ()=> {
    console.log(`app is running at ${port}`)
})

// --- ROUTES ---- 
 app.use("/api", authRoutes)