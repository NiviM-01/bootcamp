import express from "express";
import SignupDetails from '../models/signupSchema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const postSignupData = async (req, res) => {
    const { username, password, email, confrimemail,firstname,lastname,role,city,country } = req.body;
    const hashPasword = bcrypt.hashSync(password, 10)
    const newUser = new SignupDetails ({  username, email, confrimemail,firstname,lastname,role,city,country,password: hashPasword });
    try {
        await newUser.save();
        res.status(200).json(
            {
                success: true,
                message: 'user is created',
                newUser
            }
        );
    } catch (error) {
        const message = error.message ;
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }

}
export const getSignupData = async (req,res)=> {
    try {
        const userid = req.params.id;
        const Profile = await SignupDetails.find({_id:userid});
        res.status(200).json(
            {
                success: true,
                Profile
            }
        );
    } catch (error) {
        const message = error.message
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }
}
export const getSignupStaffDetails = async (req,res)=> {
    try {
        const role = req.query.role;
        console.log(role);
        const Profile = await SignupDetails.find({role:role});
        res.status(200).json(
            {
                success: true,
                Profile
            }
        );
    } catch (error) {
        const message = error.message
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }
}

export const getSignupStudentDetails = async (req,res)=> {
    try {
        const role = req.query.role;
        console.log(role);
        const Profile = await SignupDetails.find({role:role});
        res.status(200).json(
            {
                success: true,
                Profile
            }
        );
    } catch (error) {
        const message = error.message
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }
}

export const postLoginData = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUser = await SignupDetails.findOne({ email });
        if (!checkUser) {
            return (
                res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: 'User not found'
                }))
        }
        const userPassword = await bcrypt.compareSync(password, checkUser.password);
        console.log(userPassword);
        if (!userPassword) {
            return (
                res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: 'wrong password'
                }))
        }
        const userToken = jwt.sign({ id: checkUser._id, email: checkUser.email }, "password")
        res.header('authentication', userToken).status(200).json(
            {
                token: userToken,
                role:checkUser.role,
                userid:checkUser._id,
                success: true,
                statusCode: 200,
                message: 'success'
            })
    } catch (err) {
        const message = err.message;
        const statusCode = err.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }

}

