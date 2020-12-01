import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper'


export default function SpaceScreen({ route }) {

  const { space } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: space.picture}} style={styles.image} />
      <Text>{space.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    width: 250,
  }
});
