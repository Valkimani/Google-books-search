const express = require ("express");
const mongoose = require ("mongoose");
const app = express();

const PORT = process.env.PORT || 3001

// Add middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});