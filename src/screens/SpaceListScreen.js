import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper'
import spaceService from '../services/space';

export default function SpaceListScreen({ navigation }) {

  const [spaceList, setSpaceList] = useState([]);

  useEffect(() => {
    spaceService
      .getSpaces()
      .then((spaces) => setSpaceList(spaces))
      .catch(console.log);
  }, []);

  console.log(spaceList);

  const listItems = spaceList.map((item) => <Button key={item.id} onPress={() => navigation.navigate('Space', { space: item })} title={item.name}/>);

  const SpaceCard = ({ item }) => {
    <Card style={styles.card} onPress={() => navigation.navegate('Space', {space: item})}>
      <Card.Cover source={{ uri: item.pictlure }} />
      <Card.Content>
        <Title>{item.name}</Title>
      </Card.Content>
    </Card>
  };

  return(
    <View style={styles.container}>
      <ul>{listItems}</ul>
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
  card: {
    margin: 10,
  }
});
