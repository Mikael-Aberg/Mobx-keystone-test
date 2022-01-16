import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, View} from 'react-native';
import {useStores} from '../../../hooks';
import QueueButton from './queue-button';

const QueueList = observer(() => {
  const {queueStore} = useStores();

  const onQueuePress = (queue: Queue) => {
    console.log('Pressed: ', queue.name);
  };

  const renderItem = ({item}: {item: Queue}) => (
    <QueueButton queue={item} onPress={onQueuePress} />
  );

  const itemSeperator = () => <View style={{height: 10}} />;

  console.log('list');

  return (
    <FlatList
      data={queueStore.visibleQueues}
      ItemSeparatorComponent={itemSeperator}
      contentContainerStyle={{paddingBottom: 10}}
      renderItem={renderItem}
    />
  );
});

export default QueueList;
