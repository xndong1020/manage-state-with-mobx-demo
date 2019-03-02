import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import Table from './components/Table'
import TableInput from './components/TableInput'
import RemoveLastRowButton from './components/RemoveLastRowButton'
import Store from './store'
import './App.css'

const todosStore = new Store()
class App extends Component {
  render() {
    return (
      <>
        <TableInput store={todosStore} />
        <Table store={todosStore} />
        <RemoveLastRowButton store={todosStore} />
        <DevTools />
      </>
    )
  }
}

export default App
