import React, { Component } from "react"
import Todolist from "./components/Todolist"
import './App.css'
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
<Typography variant='h5'>

        <Todolist />
        </Typography>
      </div>
    )
  }
}

export default App
