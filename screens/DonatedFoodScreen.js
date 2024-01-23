import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const DonatedFoodScreen = () => {
  const navigation = useNavigation();
  const [mostRecentDonation, setMostRecentDonation] = useState(null);
  const [allOtherDonations, setAllOtherDonations] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser.uid;

    const getDonatedFood = async () => {
      try {
        const foodCollectionRef = collection(db, 'restaurants', userId, 'foodData');
        const foodQuery = query(
          foodCollectionRef,
          orderBy('timestamp', 'desc'), // Order by timestamp in descending order
          limit(100) // Limit to the two most recent donations
        );

        const foodSnapshot = await getDocs(foodQuery);
        const allOtherFoodData = [];

        const currentDate = new Date();
        const fiveMinutesAgo = new Date(currentDate.getTime() - 5 * 60 * 1000); // 5 minutes ago

        foodSnapshot.forEach((doc) => {
          const foodData = { id: doc.id, ...doc.data() };
          const donationTimestamp = foodData.timestamp.toDate();

          if (donationTimestamp > fiveMinutesAgo) {
            // Donation is within the last 5 minutes
            setMostRecentDonation(foodData);
            // Break out of the loop once the most recent donation is found
            return;
          } else {
            allOtherFoodData.push(foodData);
          }
        });

        setAllOtherDonations(allOtherFoodData);
      } catch (error) {
        console.error('Error fetching donated food:', error);
      }
    };

    getDonatedFood();
  }, []);

  const renderDonationItem = ({ item }) => (
    <View style={styles.donationItem}>
      <Text>Donator Name: {item.donatorName}</Text>
      <Text>Food Name: {item.foodName}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Location: {item.location}</Text>
      {/* Add more fields as needed */}
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
      {mostRecentDonation && (
        <>
          <Text style={styles.listTitle}>Most Recent Donation</Text>
          <FlatList
            data={[mostRecentDonation]}
            keyExtractor={(item) => item.id}
            renderItem={renderDonationItem}
          />
        </>
      )}

      {allOtherDonations.length > 0 && (
        <>
          <Text style={styles.listTitle}>Previous Donations</Text>
          <FlatList
            data={allOtherDonations}
            keyExtractor={(item) => item.id}
            renderItem={renderDonationItem}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  donationItem: {
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});

export default DonatedFoodScreen;
