import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from "bcrypt"

export const userSchema = new mongoose.Schema({

    name: {
        type: String, required: [true, "Name is required"]
    },
    email: {
        type: String, 
        required: [true, "Email is required"],
        unique: true,
        validate: [validator.isEmail, 'please provide a valid email'],
        lowercase: true,
    },
    hashedPassword: {
        type: String, 
        required: [true, "Password is required"],
        /* minlength: [8, "Password must be at least 8 characters long"],
        select: false */
    },  
    profile:
{
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, 
    posts:
    {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }]
    }
}) 

/* userSchema.pre("save",async ()=>{

    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const newlyCreateHashedPswd = await bcrypt.hash(this.hashedPassword, salt)
    console.log("pre", newlyCreateHashedPswd);

    this.hashedPassword = newlyCreateHashedPswd

}) */

const userModel =  mongoose.model('User', userSchema)
export default  userModel