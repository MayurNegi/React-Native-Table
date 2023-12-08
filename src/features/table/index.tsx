import React, {useState} from 'react';
import {data} from '../../data/data';
import {FlatList, ScrollView, View} from 'react-native';
import Column from '../column';
import TableHeader from './TableHeader';

const Table = () => {
  const [table, setTable] = useState(data.slice(0, 25));
  console.log('table', table);

  return (
    <View style={{flex: 1}}>
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
    </View>
  );
};
export default Table;
