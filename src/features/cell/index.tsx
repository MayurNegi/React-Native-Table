import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

const Cell = ({
  element,
  viewStyle,
  textStyle,
}: {
  element: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}) => {
  return (
    <View
      style={{width: 100, borderWidth: 1, borderColor: 'black', ...viewStyle}}>
      <Text style={{...styles.text, ...textStyle}} numberOfLines={1}>
        {element}
      </Text>
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});
