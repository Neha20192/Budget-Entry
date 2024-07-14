// src/components/Form.js
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../store/budgetSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const dispatch = useDispatch();

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('persist:root');
      console.log('Redux Persist storage cleared successfully.');
    } catch (error) {
      console.error('Error clearing Redux Persist storage:', error);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Budget Add...');
    console.log('Name:', name);
    console.log('PlannedAmount:', plannedAmount);
    console.log('ActualAmount:', actualAmount);

    dispatch(addItem({name, plannedAmount, actualAmount}));
    setName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <View style={[styles.buttonContainer]}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText} onPress={handleSubmit}>
            Add
          </Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.push('ShowDetails')}>
            Show Details
          </Text>
        </View>
      </View>
      <View style={styles.storageButton}>
        <Text style={styles.buttonText} onPress={clearStorage}>
          Clear Storage
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E4C59E',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#803D3B',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  buttonStyle: {
    backgroundColor: '#AF8260',
    borderRadius: 6,
    width: '50%',
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  storageButton: {
    backgroundColor: '#AF8260',
    borderRadius: 6,
    width: '50%',
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 20,
  },
});

export default Home;
