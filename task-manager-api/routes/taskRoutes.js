const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Task Routes
router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
