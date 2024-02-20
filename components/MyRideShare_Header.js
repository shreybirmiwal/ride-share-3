import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyRideShare_Header() {

    return(
        <View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Rides</Text>
            </View> */}

            <View style={{ marginBottom: 16, padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Join from code</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput style={{ borderWidth: 1, padding: 8, marginTop: 8, flex: 1 }} placeholder="Enter code" />
                <TouchableOpacity style={{ marginLeft: 8 }}>
                    <Ionicons name="arrow-forward-outline" size={24} color="blue" />
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginBottom: 16, padding: 16, paddingTop: 0 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Create new rideshare</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput style={{ borderWidth: 1, padding: 8, marginTop: 8, flex: 1 }} placeholder="Enter ride details" />
                <TouchableOpacity style={{ marginLeft: 8 }}>
                    <Ionicons name="arrow-forward-outline" size={24} color="blue" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}