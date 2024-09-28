import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image, Alert, Picker } from 'react-native';

// const App = () => {
//   const onPress = () => {
//     alert('Button pressed!');
//   };
  // const [text, setText] = useState('');
  // const [form, setForm] = useState({
  //  material: '',
  //  amount: '',
  //  dropoff: '',
  //  pickup: '',
  //  number: '',
  //  });

   const DonationScreen = ({ navigation }) => {
    const donationSchema = Yup.object().shape({
      itemType: Yup.string().required('Required'),
      quantity: Yup.number().min(1, 'Quantity must be at least 1 kg').required('Required'),
      donationOption: Yup.string().required('Required'),
      timeSlot: Yup.string().required('Required'),
      address: Yup.string().when('donationOption', {
        is: 'Pick Up',
        then: Yup.string().required('Required for pick-up option'),
        otherwise: Yup.string(),
      }),
      phoneNumber: Yup.string().matches(/^\+971 \d{2} \d{7}$/, 'Invalid phone number').required('Required'),
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
    <Formik
      initialValues={{
        itemType: '',
        quantity: '',
        donationOption: 'Drop Off',
        timeSlot: '',
        address: '',
        phoneNumber: '',
      }}
      validationSchema={donationSchema}
      onSubmit={(values) => {
        // Handle donation scheduling logic
        navigation.navigate('Confirmation', { values });
      }}
    >
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
    <Image source={require('./assets/GreenOKeeper.png')} style={styles.image} />
     
     <Text style={styles.text1}> Material</Text>
       <TextInput
         style={styles.input}
         placeholder="Material"
         value={form.material}
         onChangeText={(value) => handleChange('material', value)}
       />
       <Picker
            selectedValue={values.itemType}
            onValueChange={(value) => setFieldValue('itemType', value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Item" value="" />
            <Picker.Item label="Paper" value="Paper" />
            <Picker.Item label="Plastic" value="Plastic" />
            <Picker.Item label="Glass" value="Glass" />
            <Picker.Item label="Metal" value="Metal" />
            <Picker.Item label="Old Electronics" value="Old Electronics" />
          </Picker>
          {errors.itemType && touched.itemType ? (
            <Text style={styles.error}>{errors.itemType}</Text>
          ) : null}
       
<Text style={styles.text1}>Amount (kg):  {state.count}</Text>
   <Button 
      title='+' 
      onPress= {() => {
        // counter++ === wrong
        // setCounter(counter+1)
        dispatch({type:'increment', payload: 2})
      }}
    />
    <Button 
      title='-'
      onPress= {() => {
        // counter++
        // setCounter(counter-1)
        dispatch({type:'decrement', payload: 1})
      }}
    />
    
      <Text style={styles.text1}>Collection Mode</Text>
      <Picker
            selectedValue={values.donationOption}
            onValueChange={(value) => setFieldValue('donationOption', value)}
            style={styles.picker}
          >
            <Picker.Item label="Drop Off" value="Drop Off" />
            <Picker.Item label="Pick Up" value="Pick Up" />
          </Picker>

    <Text style={styles.text1}>Pick Up Point</Text>
      {values.donationOption === 'Pick Up' && (
            <>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
              {errors.address && touched.address ? (
                <Text style={styles.error}>{errors.address}</Text>
              ) : null}
            </>
          )}

      <Text style={styles.text1}>Drop Off Point</Text>
      <Text style={styles.text2}>301, Universal Travel and Tourism, Muroor, Abu Dhabi</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>display on maps</Text>
      </TouchableOpacity>

      <Text style={styles.text1}>Time Slot</Text>
      <Picker
            selectedValue={values.timeSlot}
            onValueChange={(value) => setFieldValue('timeSlot', value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Time Slot" value="" />
            <Picker.Item label="Saturday 10:00am" value="Saturday 10:00am" />
            <Picker.Item label="Saturday 6:00pm" value="Saturday 6:00pm" />
            <Picker.Item label="Sunday 10:00am" value="Sunday 10:00am" />
            <Picker.Item label="Sunday 6:00pm" value="Sunday 6:00pm" />
          </Picker>
          {errors.timeSlot && touched.timeSlot ? (
            <Text style={styles.error}>{errors.timeSlot}</Text>
          ) : null}

      <Text style={styles.text1}>Contact Information</Text>
       <TextInput
         style={styles.input}
         onChangeText={handleChange('phoneNumber')}
         onBlur={handleBlur('phoneNumber')}
         placeholder="+971 XX XXX XXXX"
         keyboardType="phone-pad"
         value={values.phoneNumber}
       />
       {errors.phoneNumber && touched.phoneNumber ? (
            <Text style={styles.error}>{errors.phoneNumber}</Text>
          ) : null}
       
      <Text style={styles.text1}>Contact me: +971 50 XXX XXXX</Text>
       <Button title="Schedule Donation" onPress={handleSubmit} />
       
       <Button 
      onPress={() => navigation.navigate('ThankYou')} // console.log('Button Pressed') 
      title="Done" // props.navigation.navigate
    />
       
   </View>
</ScrollView>
</Formik>
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






