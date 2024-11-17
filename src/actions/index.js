import axios from 'axios';
import { FETCH_TODOS } from './types'; 

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:9091/api/todo');
    dispatch({ type: FETCH_TODOS, payload: response.data });
  } catch (error) {
    console.error('Error fetching TODO items:', error);
  }
};

export const addTodo = (todo) => async dispatch => {
  try {
    await axios.post('http://localhost:9091/api/todo', todo);
    dispatch(fetchTodos());
  } catch (error) {
    console.error('Error adding TODO item:', error);
  }
};
