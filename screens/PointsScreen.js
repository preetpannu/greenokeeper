import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, Button, StyleSheet, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { key: 'Donation 1: 12 May 2023             100 pts' },
    { key: 'Donation 2: 2 December 2023      75 pts' },
    { key: 'Donation 3: 26 April 2023             150 pts' },
  ];


  return (
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image}/>

    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />

    
  <Text style={styles.text}>Here's how many points you have earned with your donations!</Text>

  <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Check here!</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> xx points</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

    <Text style={styles.text}>Show your Progress!</Text>

<View style={styles.container1}>
      <Button title="Instagram" onPress={onPress} />
    </View>
<View style={styles.container1}>
      <Button title="Facebook" onPress={onPress} />
    </View>
<View style={styles.container1}>
      <Button title="Twitter" onPress={onPress} />
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
   image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 50,
  },
text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    marginTop: 10,
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
   item: {
    padding: 5,
    fontSize: 20,
    height: 30,
  },

});

export default PointsScreen;


