import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface CardProps {
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({children, style}) => (
  <View style={[styles.card, style]}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default Card;
