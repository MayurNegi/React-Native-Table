import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Cell from '../cell';

const Column = ({
  item,
  index,
  handleValuesUpdate,
}: {
  item: any;
  index?: number;
  handleValuesUpdate?: (values: string[], colIndex: number) => void;
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const columnElements = ['Edit', ...Object.values(item)];
  const valuesRef = useRef(columnElements);

  const handleSavePress = () => {
    handleValuesUpdate?.(valuesRef.current.slice(0), index);
    setIsEditable(false);
  };

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {columnElements.map((element: any, colItemIndex) => (
        <Cell
          element={element}
          index={colItemIndex}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          valuesRef={valuesRef}
          handleSavePress={handleSavePress}
          key={`${index}-element-${colItemIndex}`}
        />
      ))}
    </View>
  );
};

export default Column;
