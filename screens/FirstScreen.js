import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };

  return (
    
    <View style={styles.container}>
    <Image source={require('./assets/logo.jpg')} style={styles.image} />
    <Text style={styles.text1}>Welcome User</Text>
    <Text style={styles.text}>Already a user?</Text>
    

    <Button 
      onPress={() => navigation.navigate('SignIn')} // console.log('Button Pressed') 
      title="Sign In" // props.navigation.navigate
    />
<Text style={styles.text}>Not a user yet?</Text>

<Button 
      onPress={() => navigation.navigate('SignUp')} // console.log('Button Pressed') 
      title="Sign Up" // props.navigation.navigate
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   image: {
    width: 100,
    height: 100,
  },
text: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    marginTop: 20,
  },
text1: {
    fontSize: 30,
    color: 'black',
    padding: 10,
    marginBottom: 30,
  },
});

export default FirstScreen;





