// StaffDashboard.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StaffDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Staff Dashboard</Text>
      <Button
        title="All Donated Foods"
        onPress={() => navigation.navigate('AllDonatedFoods')}
      />
      <Button
        title="User Requests"
        onPress={() => navigation.navigate('UserRequests')}
      />
      {/* Add more buttons for other sections */}
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
});

export default StaffDashboard;
