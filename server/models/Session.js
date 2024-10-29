import mongoose from "mongoose";

// Define the session schema
const sessionSchema = new mongoose.Schema({
  _id: String,
  expires: Date,
  session: {
    cookie: Object,
    token: String,
    browserId: String,
  },
});

// Create the Session model
const Session = mongoose.model("Session", sessionSchema);

export default Session;
