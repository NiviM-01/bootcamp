import CouresContent from '../models/addCouresContentSchema.js';

export const postNewCourseContent = async (req, res) => {
    const { courseid,title,resourse } = req.body;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    let date = `${day}/${month}/${year}`
    const addCourseContent = new CouresContent({courseid,title,resourse, date: date });
    try {
        await addCourseContent.save();
        res.status(200).json(
            {
                success: true,
                message: 'Course content is created',
                addCourseContent
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

export const getCourseContent = async (req, res) => {
    try {
        const courseid = req.params.id;
        const CourseContent = await CouresContent.find({courseid:courseid});
        res.status(200).json(
            {
                success: true,
                CourseContent
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

export const removeCourseContent = async (req, res) => {
    try {
        const deleteCourseContentId = req.params.id;
        const deleteCourseContent = await CouresContent.findOneAndDelete({ _id: deleteCourseContentId });
        if (!deleteCourseContent) {
            res.status(404).json(
                {
                    success: true,
                    message: 'Course content not found',

                }
            );
        }
        res.status(200).json(
            {
                success: true,
                message: 'Course content is removed',

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

export const removeAllCourseContent = async (req, res) => {
    try {
        const deleteCourseContentId = req.params.id;
        const deleteAllCourseContent = await CouresContent.deleteMany({ courseid: deleteCourseContentId });
        if (!deleteAllCourseContent) {
            res.status(404).json(
                {
                    success: true,
                    message: 'Course content not found',

                }
            );
        }
        res.status(200).json(
            {
                success: true,
                message: 'All Course content is removed',

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

export const UpdateCourseContent = async (req, res) => {
    try {
        const {title,resourse } = req.body;
        const updateCourseContenById = req.params.id;
        const updateCourseConten = await CouresContent.updateOne({ _id: updateCourseContenById }, { $set: { title,resourse } });
        if (!updateCourseConten) {
            res.status(404).json(
                {
                    success: true,
                    message: 'Course content not found',

                }
            );
        }
        res.status(200).json(
            {
                success: true,
                message: 'Course content is updated',
                updateCourseConten
            }
        );
    } catch (error) {
        console.log(error);
        const message = error.message
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });
    }

}