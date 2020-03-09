/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import Form from "./Form"
import Todo from "./Todo"

export default class Todolist extends Component {
  state = {
    todos: []
  }

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //suppose to update
          return {
            id: todo.id, //same as ...todo,
            text: todo.text, //same as ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    })
  }

  handleDelete = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }
  render() {
    return (
      <div container>
        <Form onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDelete(todo.id)}
          />
        ))}
        <div style={{color:"#FF5733 "}}>
          ACTIVE {""}{this.state.todos.filter(todo => !todo.complete).length}
        </div>
      </div>
    )
  }
}
