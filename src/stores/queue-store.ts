import {computed} from 'mobx';
import {model, Model, modelAction, prop} from 'mobx-keystone';

@model('qmanager/queue-store')
class QueueStore extends Model({
  queues: prop<Queue[]>(() => []),
}) {
  @modelAction
  processConfig(config: any) {}

  @computed
  get visibleQueues() {
    return this.queues.slice().filter(x => !x.hidden);
  }
}

export default QueueStore;
