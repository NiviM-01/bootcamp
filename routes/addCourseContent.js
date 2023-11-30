import express from "express";
import {postNewCourseContent,getCourseContent,removeCourseContent,removeAllCourseContent,UpdateCourseContent} from '../controller/courseContenController.js';

const router = express.Router();

router.post('/course/content',postNewCourseContent);
router.get('/course/content',getCourseContent);
router.delete('/course/content/:id',removeCourseContent);
router.delete('/allcourse/content/:id',removeAllCourseContent);
router.get('/course/content/:id',getCourseContent);
router.put('/course/content/:id',UpdateCourseContent);

export default router;