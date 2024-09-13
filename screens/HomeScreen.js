import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
     <Text style={styles.text}>GreenOKeeper</Text>
     <View style={styles.buttonContainer}>
     <Button 
      onPress={() => navigation.navigate('Donation')} // console.log('Button Pressed') 
      title="Donation" // props.navigation.navigate
    />
     <Button 
      onPress={() => navigation.navigate('Points')} // console.log('Button Pressed') 
      title="Points" // props.navigation.navigate
    />
       <Button 
      onPress={() => navigation.navigate('News')} // console.log('Button Pressed') 
      title="News" // props.navigation.navigate
    />
      </View>
         
    <Text style={styles.text1}>Welcome Name!</Text>
    
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
     <Text style={styles.text2}>GreenoKeeper is an innovative app designed to promote sustainability through efficient waste material recycling and collection. Developed by high school student Preet Pannu, the app offers a range of user-friendly features including pickup and drop-off services, the ability to choose convenient time slots, and a unique tool to calculate CO2 emissions saved. These features empower communities to manage their waste responsibly while fostering greater awareness and participation in recycling efforts. By providing these comprehensive services, GreenoKeeper aims to make a significant impact on environmental conservation and encourage a more sustainable future.</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
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
    marginTop: 50,
  },
text1: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  scrollView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

