const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id/save', courseController.save);
router.delete('/:id/delete', courseController.delete);
router.delete('/delete-many', courseController.deleteMany);
router.post('/:id/restore', courseController.restore);
router.delete('/:id/force-delete', courseController.forceDelete);
router.get('/:slug', courseController.show);

module.exports = router;
