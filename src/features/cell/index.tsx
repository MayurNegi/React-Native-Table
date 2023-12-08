import React from 'react';
import {View, Text} from 'react-native';

const Cell = ({element}: {element: string}) => {
  return (
	  <View style={{ width: 100, borderWidth: 1, borderColor: 'black' }}>
		<Text numberOfLines={1}>{element}</Text>
    </View>
  );
};

export default Cell;