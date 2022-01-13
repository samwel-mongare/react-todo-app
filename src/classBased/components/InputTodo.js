import React, { Component } from 'react'

export default class InputTodo extends Component {
    state = {
  title: ""
};
onChange = e => {
   this.setState({
    title: e.target.value
  });
};

handleSubmit = e => {
  e.preventDefault();
   if (this.state.title.trim()) {
    this.props.addTodoProps(this.state.title)
    this.setState({
      title: "",
    })
  } else {
    alert("Please write item")
  }
};

    render() {
        return (
           <form onSubmit={this.handleSubmit} className="form-container" >
        <input type="text" placeholder="Add todo..."
        value={this.state.title} 
        onChange={this.onChange}
        />
        <button type='submit'className="input-submit" >Submit</button>
      </form>
        )
    }
}
