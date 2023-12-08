import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Column from './features/column';

export default function AppWrapper(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hi</Text>
      <ScrollView>
        {/* column */}
        <Column />
        {/* next, back button and page offset */}
      </ScrollView>
    </SafeAreaView>
  );
}
