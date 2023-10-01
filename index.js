const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        console.log("DB Connected")
        app.listen(port, ()=>{
            console.log(`Server running on port ${port} by Emon Arefin`)
        });
    })
    .catch((err)=>console.log(err));

