import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './Table.css'

@observer
class Table extends Component {
  render() {
    const { todos, todosCount } = this.props.store
    return (
      <>
        <div>We have {todosCount} records</div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Todo Id</td>
                <td>User Id</td>
                <td>Title</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <TableRow key={todo.id} todo={todo} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

const TableRow = ({ todo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'true' : 'false'}</td>
    </tr>
  )
}

export default Table
