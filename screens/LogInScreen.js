import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };
  const [text, setText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
    <Text style={styles.text1}>Sign In</Text>
    <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setText}
        value={text}
      />
      <Text style={styles.text}></Text>
    <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setText}
        value={text}
      />

    <Text style={styles.text}></Text>
    

    <Button 
      onPress={() => navigation.navigate('Home')} // console.log('Button Pressed') 
      title="Sign In" // props.navigation.navigate
    />
    <Text style={styles.text}></Text>
    <Button title="Login via Google" color="#db4437" onPress={() => {}} />
     
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   image: {
    width: 100,
    height: 100,
  },
text: {
    padding: 8,
  },
text1: {
    fontSize: 30,
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
link: {
    color: '#007BFF',
    marginVertical: 5,
  },
  scrollView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogInScreen;

