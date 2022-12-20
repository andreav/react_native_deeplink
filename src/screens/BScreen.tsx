import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BScreenProps} from '../router/routes';

const BScreen: React.FC<BScreenProps> = props => {
  console.log('SCREEN - BScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BScreen</Text>
      <Button title="goto A" onPress={() => props.navigation.navigate('A')} />
    </View>
  );
};

export default BScreen;

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
