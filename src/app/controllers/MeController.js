const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({ deleted: { $eq: true }})])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', { 
                    courses: mutipleMongooseToObject(courses),
                    deletedCount,
                })
            )
            .catch(next);

        // await Course.countDocumentsDeleted({ deleted: { $eq: true }})
        //     .then(deletedCount => {
        //         console.log(deletedCount);
        //         Course.find({})
        //             .then(courses => {
        //                 res.render('me/stored-courses', { 
        //                     courses: mutipleMongooseToObject(courses),
        //                     deletedCount,
        //                 });
        //             })
        //             .catch(next);
        //     })
        //     .catch(next);

        
    }

    // [GET] /me/trash/courses
    async trashCourses(req, res, next) {
        await Course.findDeleted({ deleted: { $eq: true }})
            .then(courses => {
                res.render('me/trash-courses', { 
                    courses: mutipleMongooseToObject(courses) 
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();