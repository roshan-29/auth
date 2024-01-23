import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponentUser = () => {
  const [location, setLocation] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
      {location && (
        <View style={{ alignItems: 'center', padding: 10 }}>
          <Text>
            Latitude: {location.latitude.toFixed(6)}, Longitude:{' '}
            {location.longitude.toFixed(6)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default MapComponentUser;
