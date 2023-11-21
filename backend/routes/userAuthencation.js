import express from "express";
import {postSignupData,postLoginData,getSignupData, getSignupStaffDetails,getSignupStudentDetails} from '../controller/SignupAuthentication.js'

const router = express.Router();

router.post('/signin',postSignupData);
router.post('/login',postLoginData);
router.get('/signin/:id',getSignupData)
router.get('/signin',getSignupStaffDetails)
router.get('/signin',getSignupStudentDetails)

export default router;