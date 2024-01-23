import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, updateEmail, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const ProfileEdit = () => {
  const auth = getAuth();
  const db = getFirestore();

  // Assuming userUid is the UID of the currently signed-in user
  const userUid = auth.currentUser ? auth.currentUser.uid : null;

  // Reference to the user document in Firestore
  const userDocRef = userUid ? doc(db, 'restaurants', userUid) : null;

  // State to manage user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle the update button press
  const handleUpdate = async () => {
    try {
      // Check if the user is signed in
      if (!auth.currentUser) {
        Alert.alert('Error', 'User not signed in.');
        return;
      }

      // Update the email address
      await updateEmail(auth.currentUser, email);

      // Send verification email
      await sendEmailVerification(auth.currentUser);

      // Update the custom user data
      const userData = {
        name,
        phone,
      };

      // Update the document with the new user data
      if (userDocRef) {
        await setDoc(userDocRef, userData);
      }

      console.log('Verification email sent. User data and email updated successfully!');
      Alert.alert('Verification Email Sent', 'Please check your email and verify your address.');
    } catch (error) {
      console.error('Error updating user data or email: ', error);
      Alert.alert('Error', 'Failed to update user data or send verification email. Please try again.');
    }
  };

  // Function to handle sending the verification email
  const handleSendVerificationEmail = async () => {
    try {
      // Check if the user is signed in
      if (!auth.currentUser) {
        Alert.alert('Error', 'User not signed in.');
        return;
      }

      // Send verification email
      await sendEmailVerification(auth.currentUser);

      console.log('Verification email sent successfully!');
      Alert.alert('Verification Email Sent', 'Please check your email and verify your address.');
    } catch (error) {
      console.error('Error sending verification email: ', error);
      Alert.alert('Error', 'Failed to send verification email. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Input fields for name, email, and phone */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      {/* Update button */}
      <Button title="Update Profile" onPress={handleUpdate} />

      {/* Button to send verification email */}
      <Button title="Send Verification Email" onPress={handleSendVerificationEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
});

export default ProfileEdit;
