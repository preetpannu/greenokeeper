import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, Button, StyleSheet, FlatList, Image} from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };
  const [modalVisible, setModalVisible] = useState(false);
  const ThankYouScreen = ({ route, navigation }) => {
    const { values } = route.params;
  
    const calculateCarbonFootprint = (quantity) => {
      return quantity * 0.46;
    };
  }
  
  return (
    
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
    <Text style={styles.text1}>Thank You For Your Donation!</Text>
    <Text style={styles.text}>A confirmation message has been sent to the mobile number provided with the details.
  </Text>
  <Text style={styles.text}>To cancel the donation scheduled, send CANCEL or to confirm, send CONFIRM to the message sent.  </Text>
    <Text style={styles.text}>Want to schedule another donation?</Text>

    <Button 
      onPress={() => navigation.navigate('Donation')} // console.log('Button Pressed') 
      title="Schedule here" // props.navigation.navigate
    />
  <Text style={styles.text}>Here's how much carbon footprint you have saved with your donation today!</Text>


  <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show CO2 emissions!</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> You have helped save {calculateCarbonFootprint(values.quantity)} kg of CO2.</Text>
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

export default ThankYouScreen;





