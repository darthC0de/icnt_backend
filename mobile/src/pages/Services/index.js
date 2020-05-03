import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Services({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Service"
        onPress={() => navigation.navigate('Service')}
      />
    </View>
  );
}
