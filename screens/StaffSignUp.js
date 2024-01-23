// StaffSignUp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const StaffSignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const db = getFirestore();

 const handleSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const staffInfo = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      // Add more staff information as needed
    };

    // Store staff information in Firestore collection
    const staffCollection = collection(db, 'staff');
    await addDoc(staffCollection, staffInfo);

    // Reset the form
    setEmail('');
    setPassword('');

    // Navigate to the login page after successful signup
    navigation.navigate('StaffLogin');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('Error signing up:', 'Email address is already in use');
    } else {
      console.error('Error signing up:', error.message);
    }
    // Handle signup error
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Staff Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default StaffSignUp;
