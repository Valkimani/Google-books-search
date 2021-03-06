const express = require ("express");
const mongoose = require ("mongoose");
const path = require ("path");
const app = express();

const PORT = process.env.PORT || 3001

// Add middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add mongoDB and mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/google_books_search",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  
  const connection = mongoose.connection;
  
  connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
  });
  
  connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
  });

// Add an express static route to serve up client build folder in heroku
app.use(express.static("client/build"));

// Add an api/config to test

app.get("/api/config", (req,res) =>{
    console.log({success:true});
})

// Added a wildcard route. Anything that is hit somewhere else, the static build route will be served instead

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});