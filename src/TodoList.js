import React from 'react';
import { observer } from "mobx-react";
import { decorate } from "mobx";

export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {//клавиша enter
      this.props.store.createTodo(e.target.value)
      e.target.value = ''
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store
    const todoLis = filteredTodos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox"
                 value={todo.complete}
                 checked={todo.complete}
                 onChange={this.toggleComplete.bind(this, todo)}/>  {todo.value}
        </li>
    ))
    return <div>
      <h1>Todos</h1>
      <div className="container-label">
        <label htmlFor="create">Create new todo</label>
        <input type="text" className="create" onKeyPress={this.createNew.bind(this)} id='create'/>
        <span className='mini-text'>press enter</span>
      </div>
      <div className="container-label">
        <label htmlFor="filter">Filter todos</label>
        <input type="text" className="filter" value={filter} onChange={this.filter.bind(this)} id='filter'/>
      </div>
      <ul className='todoList'>
        {todoLis}
      </ul>
      <a href='#' onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}

decorate(TodoList, {
  TodoList: observer,
})