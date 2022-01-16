import {Model, model, prop} from 'mobx-keystone';

@model('qmanager/queue-model')
class Queue extends Model({
  id: prop<string>(),
  name: prop<string>(),
  inQueue: prop(0).withSetter(),
  waitTime: prop(0).withSetter(),
  hidden: prop(false).withSetter(),
}) {}

export default Queue;
