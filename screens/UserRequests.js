// UserRequests.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

const UserRequests = () => {
  const [userRequests, setUserRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        const userRequestsCollection = collection(db, 'userRequests');
        const userRequestsSnapshot = await getDocs(userRequestsCollection);

        const requests = [];

        userRequestsSnapshot.forEach((requestDoc) => {
          const data = requestDoc.data();
          requests.push({
            id: requestDoc.id,
            itemName: data.itemName,
            quantity: data.quantity,
            // Add more fields as needed
          });
        });

        setUserRequests(requests);
        setIsLoading(false);
        console.log('Fetched user requests:', requests);
      } catch (error) {
        console.error('Error fetching user requests:', error);
        setIsLoading(false);
      }
    };

    fetchUserRequests();
  }, [db]);

  const renderItem = ({ item }) => (
    <View style={styles.requestItem}>
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      {/* Add more fields as needed */}
    </View>
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
      <Text style={styles.heading}>User Requests</Text>
      <FlatList
        data={userRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  requestItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
});

export default UserRequests;
