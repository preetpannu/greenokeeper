import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, Button, StyleSheet, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
    <Text style={styles.text1}>Catch Up On News!</Text>
    <Text style={styles.text}>Recycle and reap rewards: Abu Dhabi installs 25 reverse vending machines  </Text>
    
    <Text style={styles.text}>Climate crisis is making days longer, and other nature and climate stories you need to read this week
  </Text>
  <Text style={styles.text}>Nature restoration, rewilding and battery innovations: Positive environmental stories from 2024
 </Text>
    <Text style={styles.text}>Sunday was the hottest day ever recorded on Earth
</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
   image: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 20,
  },
text: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    marginTop: 20,
  },
text1: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f194ff',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196f3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default NewsScreen;





