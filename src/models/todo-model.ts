import {computed} from 'mobx';
import {model, Model, prop} from 'mobx-keystone';

@model('testApp/Todo')
class Todo extends Model({
  text: prop<string>().withSetter(),
  done: prop(false).withSetter(),
}) {
  @computed
  get asString() {
    return `${!this.done ? 'TODO' : 'DONE'} ${this.text}`;
  }
}

export default Todo;
