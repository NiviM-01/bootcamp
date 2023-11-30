import express  from "express";
import {postNewEntroll,getEntroll} from '../controller/courseEntrollment.js'

const router = express.Router();

router.post('/userEntrollment',postNewEntroll);
router.get('/userEntrollment',getEntroll)

export default router;