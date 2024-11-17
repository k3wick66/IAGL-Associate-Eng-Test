import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos, addTodo } from "../actions"; 
import { connect } from "react-redux";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAddTodo = () => {
    const task = prompt("Enter TODO item:");
    if (task) {
      this.props.addTodo({ task });
    }
  };

  render() {
    const { todos } = this.props.data;
    return (
      <div>
        <ul className="todo-list">
          {todos && todos.length ? (
            todos.map((todo, index) => (
              <Todo key={`todo-${index}`} todo={todo.task} />
            ))
          ) : (
            "No todos, yay!"
          )}
        </ul>
        <button onClick={this.handleAddTodo}>Add TODO</button>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {} }) => ({
  data,
});

export default connect(mapStateToProps, { fetchTodos, addTodo })(TodoList);
