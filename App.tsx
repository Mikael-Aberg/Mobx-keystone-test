import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StoreContext, stores} from './src/stores';
import QueueList from './src/ui/queues/components/queue-list';

const App = () => {
  return (
    <StoreContext.Provider value={stores}>
      <TouchableOpacity
        onPress={() => {
          stores.queueStore.queues[0].setHidden(
            !stores.queueStore.queues[0].hidden,
          );
        }}>
        <Text>Toggle queue 1 visible</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          stores.queueStore.queues[0].setWaitTime(Math.random());
          stores.queueStore.queues[1].setInQueue(Math.random());
        }}>
        <Text>Update wait</Text>
      </TouchableOpacity>
      <QueueList />
    </StoreContext.Provider>
  );
};

export default App;
