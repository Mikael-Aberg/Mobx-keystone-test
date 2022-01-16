import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../common/components/card';

interface QueueButtonProps {
  queue: Queue;
  onPress(queue: Queue): void;
}

interface TextProps {
  getData(): number | string;
}

const TextDisplay = observer((props: TextProps) => (
  <Text>{props.getData()}</Text>
));

const QueueButton = observer((props: QueueButtonProps) => {
  const onPress = useCallback(() => {
    props.onPress(props.queue);
  }, [props.onPress, props.queue]);

  console.log("Button");

  const getInQueue = () => {
    console.log('InQueue');

    return props.queue.inQueue <= 0 ? '---' : props.queue.inQueue;
  };
  const getWaitTime = () =>{
    console.log("Wait");

    return props.queue.waitTime <= 0 ? '---' : props.queue.waitTime;
  }

  return (
    <Card>
      <TouchableOpacity onPress={onPress}>
        <Text>{props.queue.name}</Text>
        <View style={styles.bottom_wrapper}>
          <TextDisplay getData={getInQueue} />
          <TextDisplay getData={getWaitTime} />
          {/* <Text>{props.queue.inQueue}</Text>
          <Text>{props.queue.waitTime} min</Text> */}
        </View>
      </TouchableOpacity>
    </Card>
  );
});

const styles = StyleSheet.create({
  bottom_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: '20%',
  },
});

export default QueueButton;
