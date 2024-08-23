import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema(
  {
    email: String, 
  },
  { timestamps: true }
);

const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

export default Waitlist;
