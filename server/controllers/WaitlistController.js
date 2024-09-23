import Waitlist from "../models/Waitlist.js";

export const AddtoWaitlist = (req, res) => {
  const { email } = req.body;

  // Check if the email already exists in the waitlist
  Waitlist.findOne({ where: { email } })
    .then((existingEmail) => {
      if (existingEmail) {
        // Email is already in the waitlist
        return res
          .status(400)
          .json({ error: "Email is already in the waitlist" });
      } else {
        // Add the email to the waitlist
        return Waitlist.create({ email });
      }
    })
    .then((waitlist) => {
      if (waitlist) {
        res.status(201).json({ success: "Added to Waitlist", waitlist });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
