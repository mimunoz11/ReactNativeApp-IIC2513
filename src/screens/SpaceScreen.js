import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title } from 'react-native-paper'
import commentService from '../services/comment';

export default function SpaceScreen({ route }) {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    commentService
      .getComments(space.id)
      .then((comments) => setCommentList(comments))
      .catch(console.log);
  }, []);

  console.log(commentList);

  const listItems = commentList.map((item) => <li key={item.id}>{item.content}</li>);

  const { space } = route.params;

  console.log(space.id);
  
  return (
    <>
    <li>{space.name}</li>
    <View style={styles.container}>
      <Image source={{uri: space.picture}} style={styles.image} />
    </View>
    <ul>{listItems}</ul>
    </>
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
