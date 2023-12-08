import React, {useRef, useState} from 'react';
import {data} from '../../data/data';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import Column from '../column';
import TableHeader from './TableHeader';

const PAGE_LENGTH = 25;

const Table = () => {
  const [table, setTable] = useState(data.slice(0, PAGE_LENGTH));
  let pageNumberRef = useRef(0);

  const handleNext = () => {
    const newPageIndex = pageNumberRef.current + 1;
    pageNumberRef.current = newPageIndex;
    const firstElementIndex = newPageIndex * PAGE_LENGTH;
    setTable(data.slice(firstElementIndex, firstElementIndex + PAGE_LENGTH));
  };

  const handleBack = () => {
    if (pageNumberRef?.current === 0) {
      return;
    }

    const newPageIndex = pageNumberRef.current - 1;
    pageNumberRef.current = newPageIndex;
    const firstElementIndex = newPageIndex * PAGE_LENGTH;
    setTable(data.slice(firstElementIndex, firstElementIndex + PAGE_LENGTH));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginVertical: 16,
        }}>
        <Text>Page No.: {pageNumberRef.current}</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={handleBack} style={styles.button}>
            <Text style={{textAlign: 'center', paddingVertical: 6}}>Back</Text>
          </Pressable>
          <Pressable onPress={handleNext} style={styles.button}>
            <Text style={{textAlign: 'center', paddingVertical: 6}}>Next</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <TableHeader />
          <FlatList
            data={table}
            style={{marginHorizontal: 16}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => <Column item={item} index={index} />}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default Table;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 4,
    width: 80,
    marginHorizontal: 8,
  },
});
