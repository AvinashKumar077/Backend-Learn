import e from "express"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true, // also we can give a custom message like required: 'Password is required' example below
            // required: [true, 'Password is required']
        }

    }, { timestamps: true })

export const User = mongoose.model('User', userSchema)  // this User will change into users in the database