import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Table from './features/table';

export default function AppWrapper(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* column */}
      <Text>Hii</Text>
      <Table />
      {/* next, back button and page offset */}
    </SafeAreaView>
  );
}
