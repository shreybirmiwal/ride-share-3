import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RideCard({ Name, People, Time, onDelete, onEdit, onStart }) {
  return (
    <View style={{ marginBottom: 16, borderWidth: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Name}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={onDelete} style={{ alignItems: 'center', marginRight: 16 }}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onEdit} style={{ alignItems: 'center', marginRight: 16 }}>
            <Ionicons name="create-outline" size={24} color="blue" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onStart} style={{ alignItems: 'center' }}>
            <Ionicons name="play-outline" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{People}</Text>
      <Text style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{Time}</Text>
    </View>
  );
}
