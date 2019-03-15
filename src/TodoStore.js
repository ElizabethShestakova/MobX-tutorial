import { computed, observable, decorate } from 'mobx';

class TodoStore {
    todos = ['buy milk', 'buy eggs']
    filter = ''
    get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, 'i')
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
    }

    createTodo(value) {
        this.todos.push(value)
    }
}

decorate(TodoStore, {
    todos: observable,
    filter: observable,
    filteredTodos: computed,
})

var store = window.store = new TodoStore

export default store
