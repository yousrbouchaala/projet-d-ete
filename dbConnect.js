// external imports
const mongoose = require("mongoose");


DB_URL="mongodb+srv://Yousrbouchaala:cQvpoq9sZCh9x6cL@crud.176daux.mongodb.net/Gestion_PFE?retryWrites=true&w=majority"
async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        DB_URL
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;