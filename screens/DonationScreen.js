import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';


const App = () => {
  const onPress = () => {
    alert('Button pressed!');
  };
  const [text, setText] = useState('');
  const [form, setForm] = useState({
   material: '',
   amount: '',
   dropoff: '',
   pickup: '',
   number: '',
   });

   const reducer= (state, action) => {
    // state === {count:number}
    // action === {type:'increment'||'decrement', payload: 1||-1}
    switch (action.type) {
      case 'increment':
        return {...state, count: state.count + action.payload}
      case 'decrement':
        return {...state, count: state.count - action.payload}
      default:
        return state;
    }
  };

 const handleChange = (name, value) => {
   setForm({ ...form, [name]: value });
 };


 const handleSubmit = () => {
   Alert.alert('Form Submitted', JSON.stringify(form));
 };


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
     
     <Text style={styles.text1}> Material (paper,plastic, electronics, glass, metal)</Text>
       <TextInput
         style={styles.input}
         placeholder="Material"
         value={form.material}
         onChangeText={(value) => handleChange('material', value)}
       />
       
<Text style={styles.text1}>Amount (kg)</Text>
   <Button 
      title='increase count' 
      onPress= {() => {
        // counter++ === wrong
        // setCounter(counter+1)
        dispatch({type:'increment', payload: 5})
      }}
    />
    <Button 
      title='decrease count'
      onPress= {() => {
        // counter++
        // setCounter(counter-1)
        dispatch({type:'decrement', payload: 1})
      }}
    />
    <Text>current count: {state.count}</Text> 
      <Text style={styles.text1}>Collection Mode</Text>
     <View style={styles.buttonContainer1}>
        <Button title="Drop Off" onPress={() => {}} />
        <Button title="Pick Up"  onPress={onPress} />
      </View>
    <Text style={styles.text1}>Pick Up Point</Text>
      <TextInput
         style={styles.input}
         placeholder="Address"
         value={form.pickup}
         onChangeText={(value) => handleChange('pickup', value)}
       />
    <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>display on maps</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Drop Off Point</Text>
      <Text style={styles.text2}>301, Universal Travel and Tourism, Muroor, Abu Dhabi</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>display on maps</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Time Slot</Text>
     <View style={styles.buttonContainer1}>
        <Button title="Saturday" onPress={() => {}} />
        <Button title="Sunday"  onPress={onPress} />
      </View>
    <View style={styles.buttonContainer}>
        <Button title="10:00 am" onPress={() => {}} />
        <Button title="11:00 am"  onPress={onPress} />
        <Button title="5:00 pm" onPress={() => {}} />
        <Button title="6:00 pm"  onPress={onPress} />
      </View>
      <Text style={styles.text1}>Contact Information</Text>
       <TextInput
         style={styles.input}
         placeholder="+971 XX XXX XXXX"
         keyboardType="phone-pad"
         value={form.number}
         onChangeText={(value) => handleChange('number', value)}
       />
       
      <Text style={styles.text1}>Contact me: +971 50 XXX XXXX</Text>
       <Button title="Submit" onPress={handleSubmit} />

       <Text style={styles.text1}>Amount (kg)</Text>
   <TextInput
         style={styles.input}
         placeholder="Amount"
         value={form.amount}
         onChangeText={(value) => handleChange('amount', value)}
       />
      <Text style={styles.text1}>Collection Mode</Text>
     <View style={styles.buttonContainer1}>
        <Button title="Drop Off" onPress={() => {}} />
        <Button title="Pick Up"  onPress={onPress} />
      </View>
    <Text style={styles.text1}>Pick Up Point</Text>
      <TextInput
         style={styles.input}
         placeholder="Address"
         value={form.pickup}
         onChangeText={(value) => handleChange('pickup', value)}
       />
    <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>display on maps</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Drop Off Point</Text>
      <Text style={styles.text2}>301, Universal Travel and Tourism, Muroor, Abu Dhabi</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>display on maps</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Time Slot</Text>
     <View style={styles.buttonContainer1}>
        <Button title="Saturday" onPress={() => {}} />
        <Button title="Sunday"  onPress={onPress} />
      </View>
    <View style={styles.buttonContainer}>
        <Button title="10:00 am" onPress={() => {}} />
        <Button title="11:00 am"  onPress={onPress} />
        <Button title="5:00 pm" onPress={() => {}} />
        <Button title="6:00 pm"  onPress={onPress} />
      </View>
      <Text style={styles.text1}>Contact Information</Text>
       <TextInput
         style={styles.input}
         placeholder="+971 XX XXX XXXX"
         keyboardType="phone-pad"
         value={form.number}
         onChangeText={(value) => handleChange('number', value)}
       />
       
       <Button 
      onPress={() => navigation.navigate('ThankYou')} // console.log('Button Pressed') 
      title="Submit" // props.navigation.navigate
    />
       
     
   </View>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
  scrollView: {
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
 },

   image: {
    width: 75,
    height: 75,
  },
text: {
    fontSize: 15,
    color: 'black',
    padding: 10,
    marginTop: 50,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
text1: {
    fontSize: 18,
    color: 'black',
    padding: 10,
  },
  text2: {
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 5,
  },
  buttonContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 5,
  },
  input1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#007BFF',
    marginVertical: 5,
  },
});

export default DonationScreen;

