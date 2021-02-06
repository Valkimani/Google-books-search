const express = require ("express");
const mongoose = require ("mongoose");
const app = express();

const PORT = process.env.PORT || 3001

// Add middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Add an api/config to test

app.get("/api/config", (req,res) =>{
    console.log({success:true});
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});