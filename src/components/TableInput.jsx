import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class TableInput extends Component {
  @observable title = ''

  handleInput = e => {
    const { value } = e.target
    this.title = value
  }
  handleSubmit = e => {
    e.preventDefault()
    const { todosCount, addTodo } = this.props.store
    addTodo({
      id: todosCount + 1,
      userId: 2,
      title: this.title,
      completed: false
    })
  }
  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="title"
            onChange={this.handleInput}
            placeholder="Enter title"
          />
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

export default TableInput
