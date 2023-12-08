import React from 'react';
import {View} from 'react-native';
import {data} from '../../data/data';
import Cell from '../cell';

const TableHeader = () => {
  const tableColObj = data.slice(0, 1);
  const tableCol = ['#', ...Object.keys(tableColObj[0])];

  return (
    <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 16}}>
      {tableCol.map((element: any, colItemIndex) => (
        <Cell
          element={element}
          key={`tableHeader-${colItemIndex}`}
          viewStyle={{backgroundColor: 'lightGrey'}}
          textStyle={{fontSize: 16, fontWeight: '700'}}
        />
      ))}
    </View>
  );
};

export default TableHeader;
