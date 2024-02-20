import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import RideCard from '../components/RideCard';
import MyRideShare_Header from '../components/MyRideShare_Header';

export default function MyRideShares() {
  return (
    <View style={{ flex: 1 }}>
 
      <MyRideShare_Header/>

      <ScrollView style={{ padding: 16 }}>
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
        <RideCard Name={"School Carpool"} People={"Shrey, Dhiyaan, and Nilan"} Time={"Monday 8:00 AM"} />
      </ScrollView>
    </View>
  );
}
