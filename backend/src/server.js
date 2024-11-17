const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  // GET /api/todo - Retrieve all TODO items
  server.get('/api/todo', async (req, res) => {
    try {
      const todos = await todoService.getTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching TODO items', error: error.message });
    }
  });

  // POST /api/todo - Add a new TODO item
  server.post('/api/todo', async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ message: 'Task is required' });
    }

    try {
      const newTodo = await todoService.addTodo({ task });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: 'Error adding TODO item', error: error.message });
    }
  });

  return server;
};

module.exports = server;
