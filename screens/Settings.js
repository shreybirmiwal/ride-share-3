import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import { auth } from '../firebase';
import ToastManager, { Toast } from 'expo-react-native-toastify';

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState(require('../assets/default-pfp.jpg')); // You should replace this with the actual path or URL of the default profile picture
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('john.doe@example.com');

  const handleEditProfilePic = () => {
    Alert.alert('Edit Profile Picture', 'Feature not implemented yet.');
  };

  const handleSignOut = () => {
    auth.signOut()
    Toast.success("Signed out!")
  };

  const handleDeleteAccount = () => {
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => console.log('User account deleted.') },
    ]);
  };

  return (
    <View style={styles.container}>
        <ToastManager/>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleEditProfilePic}>
          <Image source={profilePicture} style={styles.profilePicture} />
        </TouchableOpacity>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>


    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Settings;
