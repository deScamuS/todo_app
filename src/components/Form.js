/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import shortid from "shortid"
import Input from '@material-ui/core/Input';


export default class Form extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <Input
            class="mdc-text-field__input"
            name="text"
            placeholder="Task..."
            inputProps={{'aria-label': "Add a Task"}}
            value={this.state.text}
            onChange={this.handleChange} 
          />


        </form>
      </div>
    )
  }
}
