const express = require('express');
const router = express.Router();

let todos = [];

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST a new todo
router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  todos.push(task);
  res.status(201).json({ message: 'Todo added successfully', todos });
});

module.exports = router;
