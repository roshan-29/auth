// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Create the StaffLogin component
const StaffLogin = ({ navigation }) => {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the authentication instance from Firebase
  const auth = getAuth();

  // Function to handle the login process
  const handleLogin = async () => {
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Reset the form
      setEmail('');
      setPassword('');

      // Navigate to the staff dashboard after successful login
      navigation.navigate('StaffDashboard');
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error (e.g., display an error message to the user)
    }
  };

  // Function to navigate to the staff sign-up page
  const handleNavigateToSignUp = () => {
    navigation.navigate('StaffSignUp');
  };

  // Return the UI components
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Staff Login</Text>
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
      <Button title="Login" onPress={handleLogin} />

      {/* Button to navigate to the staff sign-up page */}
      <Button title="Sign Up" onPress={handleNavigateToSignUp} />
    </View>
  );
};

// Styles for the components
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

// Export the StaffLogin component as the default export
export default StaffLogin;
