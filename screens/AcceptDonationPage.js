import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import OpenCageGeocoder from 'opencage-api-client'; // Import OpenCageGeocoder library
import { getFirestore, doc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

// Initialize OpenCageGeocoder with your OpenCage API key
const openCageApiKey = 'e0399a5f02dd462f8bb27b4445789b44';

const AcceptDonationPage = () => {
  const [pickupTime, setPickupTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [isAccepting, setIsAccepting] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { donation } = route.params;
  const db = getFirestore();

  useEffect(() => {
    if (selectedLocation) {
      // Use reverse geocoding to get the place name using OpenCageGeocoder
      OpenCageGeocoder.geocode({
        q: `${selectedLocation.latitude}, ${selectedLocation.longitude}`,
        key: openCageApiKey,
      })
        .then((response) => {
          const place = response.results[0]?.formatted || 'Unknown Place';
          setSelectedPlace(place);
        })
        .catch((error) => {
          console.error('Error getting place name:', error);
        });
    }
  }, [selectedLocation]);

  const handleAcceptDonation = async () => {
    try {
      // Update the donation status to accepted and add pickup time and location
      const donationRef = doc(db, 'restaurants', donation.restaurantId, 'foodData', donation.id);
      await updateDoc(donationRef, {
        status: 'accepted',
        pickupTime: pickupTime,
        location: selectedLocation,
      });

      // Add the accepted donation to the 'staff' subcollection
      const staffCollectionRef = collection(db, 'staff', 'acceptedDonations');
      await addDoc(staffCollectionRef, {
        donationId: donation.id,
        restaurantId: donation.restaurantId,
        foodName: donation.foodName,
        donatorName: donation.donatorName,
        quantity: donation.quantity,
        location: selectedLocation,
        timestamp: donation.timestamp, // Keep it as is or convert if needed in the backend
        pickupTime: pickupTime,
      });

      navigation.goBack();
    } catch (error) {
      console.error('Error accepting donation:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donation Details</Text>
      <View style={styles.foodItem}>
        <Text style={styles.foodName}>{donation.foodName}</Text>
        <Text style={styles.foodDescription}>Donator: {donation.donatorName}</Text>
        <Text style={styles.foodDescription}>Quantity: {donation.quantity}</Text>
        {/* Displaying latitude and longitude as a string */}
        <Text style={styles.foodDescription}>
          Location: {selectedLocation ? `${selectedLocation.latitude}, ${selectedLocation.longitude}` : 'No location selected'}
        </Text>
        <Text style={styles.foodDescription}>Timestamp: {new Date(donation.timestamp).toLocaleString()}</Text>
      </View>

      {/* MapView component */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation ? selectedLocation.latitude : 37.7749,
          longitude: selectedLocation ? selectedLocation.longitude : -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          // Handle the map press event and update the selectedLocation state
          setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        {/* Display a marker on the selected location */}
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Selected Location"
          />
        )}
      </MapView>

      {/* Display the selected location in the TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Enter Pickup Time"
        value={pickupTime}
        onChangeText={(text) => setPickupTime(text)}
      />

      {/* Display the selected place name in a Text component */}
      <Text style={styles.selectedLocationText}>
        Selected Location: {selectedPlace || 'No location selected'}
      </Text>

      <TouchableOpacity
        style={styles.acceptButton}
        onPress={handleAcceptDonation}
        disabled={isAccepting}
      >
        <Text style={styles.buttonText}>{isAccepting ? 'Accepting...' : 'Accept Donation'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  foodItem: {
    marginBottom: 16,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodDescription: {
    fontSize: 16,
  },
  map: {
    flex: 1,
    height: 200, // Adjust the height as needed
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  selectedLocationText: {
    fontSize: 16,
    marginBottom: 16,
  },
  acceptButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AcceptDonationPage;
