import React from 'react';
import {SafeAreaView} from 'react-native';
import Table from './features/table';

export default function AppWrapper(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Table />
    </SafeAreaView>
  );
}
