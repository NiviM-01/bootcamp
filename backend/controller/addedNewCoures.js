import AddedCoures from '../models/addedNewCouresSchema.js';

export const postNewCourse = async (req, res) => {
    const { coursename, description, status,userid } = req.body;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    let date = `${day}/${month}/${year}`
    const addedCourse = new AddedCoures({userid, coursename, description, status, date: date });
    try {
        await addedCourse.save();
        res.status(200).json(
            {
                success: true,
                message: 'Course is created',
                addedCourse
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
export const getNewCourse = async (req, res) => {
    try {
        const getAllNewCourse = await AddedCoures.find();
        res.status(200).json(
            {
                success: true,
                getAllNewCourse
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
export const removeNewCourse = async (req, res) => {
    try {
        const deleteCourseId = req.params.id;
        const deleteNewCourse = await AddedCoures.findOneAndDelete({ _id: deleteCourseId });
        if (!deleteNewCourse) {
            res.status(404).json(
                {
                    success: true,
                    message: 'Course not found',

                }
            );
        }
        res.status(200).json(
            {
                success: true,
                message: 'Course is removed',

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
export const UpdateNewCourse = async (req, res) => {
    try {
        const { coursename, description, status } = req.body;
        const updateCourseId = req.params.id;
        const updateNewCourse = await AddedCoures.updateOne({ _id: updateCourseId }, { $set: { coursename, description, status } });
        console.log(updateNewCourse, updateCourseId);
        if (!updateNewCourse) {
            res.status(404).json(
                {
                    success: true,
                    message: 'Course not found',

                }
            );
        }
        res.status(200).json(
            {
                success: true,
                message: 'Course is updated',
                updateNewCourse
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
export const getOneNewCourse = async (req, res) => {
    try {
        const userid = req.params.id;
        const getOneNewCourse = await AddedCoures.find({userid:userid});
        res.status(200).json(
            {
                success: true,
                getOneNewCourse
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