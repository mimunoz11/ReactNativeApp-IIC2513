import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ handleLogin }) {
  const [data, setData] = useState({
    email:'',
    password:'',
  })

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Climboulder</Title>
      <TextInput 
        label="Email"
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
        style={[styles.formElement, styles.input]}
      />
      <TextInput 
        label="Password" 
        value={data.password} 
        onChangeText={(text) => setData({ ...data, password: text })}
        secureTextEntry={true}
        style={[styles.formElement, styles.input]}
      />
      <Button mode="contained" style={[styles.formElement, styles.button]} onPress={ () => handleLogin(data) } >Log In</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    alignSelf: 'center',
  },
  formElement: {
    marginVertical: 5
  },
  input: {
    backgroundColor: '#fff'
  },
  button: {
    padding: 5
  }
});
