import express from "express";
import {postNewCourse,getNewCourse,removeNewCourse,UpdateNewCourse,getOneNewCourse} from '../controller/addedNewCoures.js';

const router = express.Router();

router.post('/newcoures',postNewCourse);
router.get('/newcoures',getNewCourse);
router.delete('/newcoures/:id',removeNewCourse);
router.put('/newcoures/:id',UpdateNewCourse);
router.get('/newcoures/:id',getOneNewCourse);




export default router;