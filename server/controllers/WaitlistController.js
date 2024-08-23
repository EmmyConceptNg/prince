import Waitlist from "../models/Waitlist.js"

export const AddtoWaitlist = (req, res) =>{
Waitlist.create({email: req.body.email}).then((waitlist) => {
    res.status(201).json({success : 'Added to Waitlist', waitlist})
}).catch((error) => {
    res.status(error.status).json({error : error.message});
})
}