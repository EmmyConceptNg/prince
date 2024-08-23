import mongoose from 'mongoose';

const UpdateSchema = new mongoose.Schema(
  {
    content: String, 
  },
  { timestamps: true }
);

const Update = mongoose.model('Update', UpdateSchema);

export default Update;
