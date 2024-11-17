let todos = [];

/**
 * Retrieve all TODO items.
 * @returns {Promise<Array>} List of TODO items.
 */
const getTodos = async () => {
  return todos;
};

/**
 * Add a new TODO item.
 * @param {Object} todo - The TODO item to add.
 * @returns {Promise<Object>} The added TODO item.
 */
const addTodo = async (todo) => {
  const newTodo = { id: todos.length + 1, ...todo };
  todos.push(newTodo);
  return newTodo;
};

module.exports = {
  getTodos,
  addTodo,
};
