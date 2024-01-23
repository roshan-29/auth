import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

const NewDonation2 = () => {
  const navigation = useNavigation();

  const [donatorName, setDonatorName] = useState('');
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        // User is signed out
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAFoodEntry = async () => 
  {
    try {
      const userId = auth.currentUser.uid;
      const foodCollectionRef = collection(db, 'restaurants', userId, 'foodData');

      await addDoc(foodCollectionRef, {
        donatorName: donatorName,
        foodName: foodName,
        quantity: quantity,
        location: location,
        timestamp: serverTimestamp(),
      });

      Alert.alert('Success', 'Food entry added successfully!', [
        { text: 'OK', onPress: () => navigateToAnotherScreen() },
      ]);
    } catch (error) {
      console.error('Error adding food entry:', error);
    }
  };

  const navigateToAnotherScreen = () => {
    navigation.navigate('DonatedFoodScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Donator Name"
        value={donatorName}
        onChangeText={(text) => setDonatorName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Food Name"
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Pressable onPress={handleAFoodEntry}>
        <Text>Submit</Text>
      </Pressable>
    </View>
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
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
});

export default NewDonation2;
