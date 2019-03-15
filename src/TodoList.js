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
  render() {
    const { filter, filteredTodos, todos } = this.props.store
    const todoLis = filteredTodos.map(todo => (
        <li>{todo}</li>
    ))
    return <div>
      <h1>Todos</h1>
      <input type="text" className="create" onKeyPress={this.createNew.bind(this)}/>
      <input type="text" className="filter" value={filter} onChange={this.filter.bind(this)}/>
      <ul>
        {todoLis}
      </ul>
    </div>
  }
}

decorate(TodoList, {
  TodoList: observer,
})