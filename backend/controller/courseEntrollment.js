import express from "express";
import newEntollment from '../models/courseEntroll.js'


export const postNewEntroll = async(req,res)=>{
    const {firstname,lastname,emailid,phonenumber} = req.body;
    const entrollment = new newEntollment({firstname,lastname,emailid, phonenumber });
    try {
        await entrollment.save();
        res.status(200).json(
            {
                success: true,
                message: 'new entrollment',
                entrollment
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

export const getEntroll = async (req,res)=>{
    try {
        const formDetails = await newEntollment.find();
        res.status(200).json(
            {
                success: true,
                formDetails
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