import {Model, prop, model} from 'mobx-keystone';

@model('qmanager/root-store')
class RootStore extends Model({cid: prop<number | undefined>().withSetter()}) {}

export default RootStore;
