import React, {Dispatch, Ref, SetStateAction} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInput,
} from 'react-native';

const CELL_WIDTH = 120;

const Cell = ({
  element,
  index,
  isEditable,
  setIsEditable,
  viewStyle,
  textStyle,
  valuesRef,
  handleSavePress,
}: {
  element: string;
  index: number;
  isEditable?: boolean;
  setIsEditable?: Dispatch<SetStateAction<boolean>>;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  valuesRef?: any;
  handleSavePress?: () => void;
}) => {
  const handleEditPress = () => {
    if (setIsEditable) {
      setIsEditable(true);
    }
  };

  const handleCancelPress = () => {
    if (setIsEditable) {
      setIsEditable(false);
    }
  };

  if (index === 0) {
    if (!isEditable) {
      return (
        <Pressable
          onPress={handleEditPress}
          style={{
            width: CELL_WIDTH,
            borderWidth: 1,
            backgroundColor: 'lightGrey',
            borderColor: 'black',
          }}>
          <Text style={{...styles.text, borderWidth: 1}} numberOfLines={1}>
            Edit
          </Text>
        </Pressable>
      );
    }

    return (
      <>
        <Pressable
          onPress={handleCancelPress}
          style={{
            width: CELL_WIDTH / 2,
            borderWidth: 1,
            backgroundColor: 'lightGrey',
            borderColor: 'black',
          }}>
          <Text style={{...styles.text, borderWidth: 1}} numberOfLines={1}>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          onPress={handleSavePress}
          style={{
            width: CELL_WIDTH / 2,
            borderWidth: 1,
            backgroundColor: 'lightGrey',
            borderColor: 'black',
          }}>
          <Text style={{...styles.text, borderWidth: 1}} numberOfLines={1}>
            Save
          </Text>
        </Pressable>
      </>
    );
  }

  const handleTextInput = (text: string) => {
    valuesRef.current[index] = text;
  };

  return (
    <View
      style={{
        width: CELL_WIDTH,
        borderWidth: 1,
        borderColor: 'black',
        ...viewStyle,
      }}>
      {!isEditable ? (
        <Text style={{...styles.text, ...textStyle}} numberOfLines={1}>
          {element}
        </Text>
      ) : (
        <TextInput onChangeText={handleTextInput} />
      )}
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    textAlign: 'center',
  },
});
