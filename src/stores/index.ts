import {createContext} from 'react';
import {registerRootStore} from 'mobx-keystone';

import RootStore from './root-store';
import QueueStore from './queue-store';
import Queue from '../models/queue-model';

const rootStore = new RootStore({});
const queueStore = new QueueStore({
  queues: [
    new Queue({id: '01', name: 'Queue 1'}),
    new Queue({id: '02', name: 'Queue 2'}),
  ],
});

export const stores = {rootStore, queueStore};

registerRootStore(rootStore);

const StoreContext = createContext(stores);

export {StoreContext};
export default rootStore;
