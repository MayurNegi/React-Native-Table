import React from 'react';
import {View} from 'react-native';
import Cell from '../cell';

const Column = ({item, index}: {item: any; index?: number}) => {
  const columnElements = Object.values(item);

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {columnElements.map((element: any, colItemIndex) => (
        <Cell element={element} key={`${index}-element-${colItemIndex}`} />
      ))}
    </View>
  );
};

export default Column;
