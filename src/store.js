import { observable, action, computed } from 'mobx'
import axios from 'axios'

class Store {
  constructor() {
    // load initial value
    this.loadData()
  }
  @observable todos = []
  @computed get todosCount() {
    return this.todos.length
  }
  @action async loadData() {
    const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
    this.todos = todos.data.splice(0, 30)
  }
  @action addTodo = todo => {
    this.todos.push(todo)
  }
  @action removeTodo = () => {
    this.todos.pop()
  }
}

export default Store
