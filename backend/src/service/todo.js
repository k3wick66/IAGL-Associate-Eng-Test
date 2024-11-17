const todoService = (repository) => {
  /**
   * Retrieve all TODO items.
   * @returns {Promise<Array>} List of TODO items.
   */
  const getTodos = async () => {
    return await repository.getTodos();
  };

  /**
   * Add a new TODO item.
   * @param {Object} todo - The TODO item to add.
   * @returns {Promise<Object>} The added TODO item.
   */
  const addTodo = async (todo) => {
    return await repository.addTodo(todo);
  };

  return {
    getTodos,
    addTodo,
  };
};

module.exports = todoService;
