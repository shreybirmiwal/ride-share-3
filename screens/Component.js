import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

export default function Component() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Rides</Text>
      </View>

        <View style={{ marginBottom: 16, padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Join from code</Text>
          <TextInput style={{ borderWidth: 1, padding: 8,  marginTop: 8 }} placeholder="Enter code" />
        </View>
        <View style={{ marginBottom: 16, padding: 16, paddingTop: 0}}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Create new rideshare</Text>
          <TextInput style={{ borderWidth: 1, padding: 8,  marginTop: 8 }} placeholder="Enter ride details" />
        </View>


        <ScrollView style={{ padding: 16 }}>


          <View style={{ marginBottom: 16,  borderWidth: 1, padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Family trip</Text>
            <Text style={{ fontSize: 14, color: '#888', marginTop: 8 }}>
              Samatha, John, and Adam
            </Text>
            <Text style={{ fontSize: 14, color: '#888', marginTop: 8 }}>
              Arrival by 10:00 AM
            </Text>
          </View>


      </ScrollView>

      
    </View>
  );
}
