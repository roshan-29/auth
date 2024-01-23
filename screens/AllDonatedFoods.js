import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
const AllDonatedFoods = () => {
  const [donatedFoods, setDonatedFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const db = getFirestore();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDonatedFoods = async () => {
      try {
        const restaurantsCollection = collection(db, 'restaurants');
        const restaurantsSnapshot = await getDocs(restaurantsCollection);

        const foods = [];

        await Promise.all(
          restaurantsSnapshot.docs.map(async (restaurantDoc) => {
            const donationsCollection = collection(restaurantDoc.ref, 'foodData');
            const donationsQuery = query(donationsCollection, orderBy('timestamp', 'desc'));
            const donationsSnapshot = await getDocs(donationsQuery);

            donationsSnapshot.forEach((donationDoc) => {
              const data = donationDoc.data();

              if (data.donatorName && data.foodName && data.location && data.quantity) {
                foods.push({
                  id: donationDoc.id,
                  restaurantId: restaurantDoc.id,
                  donatorName: data.donatorName,
                  foodName: data.foodName,
                  quantity: data.quantity,
                  location: data.location,
                  timestamp: data.timestamp.toDate(),
                });
              }
            });
          })
        );

        setDonatedFoods(foods);
        setIsLoading(false);
      
      } catch (error) {
        console.error('Error fetching donated foods:', error);
        setIsLoading(false);
      }
    };

    fetchDonatedFoods();
  }, [db]);

    const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AcceptDonationPage', {
          donation: {
            ...item,
            timestamp: item.timestamp.toISOString(), // Convert to string
          },
        });
      }}
    >

      <View style={styles.foodItem}>
        <Text style={styles.foodName}>{item.foodName}</Text>
        <Text style={styles.foodDescription}>Donator: {item.donatorName}</Text>
        <Text style={styles.foodDescription}>Quantity: {item.quantity}</Text>
        <Text style={styles.foodDescription}>Location: {item.location}</Text>
        <Text style={styles.foodDescription}>Timestamp: {item.timestamp.toString()}</Text>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donated Foods List</Text>
      <FlatList
        data={donatedFoods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted={false} // Set to true to reverse the order if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (other styles)
});

export default AllDonatedFoods;  