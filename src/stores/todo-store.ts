import {Model, prop, modelAction} from 'mobx-keystone';

class TodoStore extends Model({
  todos: prop<Todo[]>(),
}) {
  @modelAction
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  @modelAction
  removeTodo(todo: Todo) {
    const index = this.todos.findIndex(x => x === todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

export default TodoStore;
