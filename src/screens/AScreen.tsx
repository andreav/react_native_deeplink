import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AScreenProps} from '../router/routes';

const AScreen: React.FC<AScreenProps> = props => {
  console.log('SCREEN - AScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AScreen</Text>
      <Button title="goto B" onPress={() => props.navigation.navigate('B')} />
    </View>
  );
};

export default AScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
