const db = require('../config/db');

// Get all tasks
const getAllTasks = async () => {
  const [rows] = await db.query('SELECT * FROM tasks');
  return rows;
};

// Create a new task
const createTask = async (task) => {
  const { title, description, status } = task;
  const [result] = await db.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status]);
  return result.insertId;
};

// Get task by ID
const getTaskById = async (id) => {
  const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
  return rows[0];
};

// Update a task
const updateTask = async (id, task) => {
  const { title, description, status } = task;
  await db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);
};

// Delete a task
const deleteTask = async (id) => {
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
