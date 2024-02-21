import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import ToastManager, { Toast } from 'expo-react-native-toastify';
import COLORS from '../constants/colors';
import * as FirebaseStorage from 'firebase/storage';
import { storage } from '../firebase';

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState(require('../assets/default-pfp.jpg'));
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfilePicture(user.photoURL ? { uri: user.photoURL } : require('../assets/default-pfp.jpg'));
        setUserName(user.displayName || 'John Doe');
        setUserEmail(user.email || 'john.doe@example.com');
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  const handleEditProfilePic = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        const photoCamera = 'data:image/jpeg;base64,' + result.base64;

        // Upload the image to Firebase Storage
        
        const storageRef = storage.ref(`pictures/${auth.currentUser.uid}`);
        const uploadTask = storageRef.putString(photoCamera, 'data_url');

        uploadTask.on('state_changed', null, (error) => {
          console.error('Error uploading image:', error.message);
        }, () => {
          // Image uploaded successfully, get download URL
          uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            // Update the profile picture in Firebase Authentication
            await updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            });

            setProfilePicture({ uri: downloadURL });
            Toast.success('Profile picture updated successfully!');
          });
        });
      }
    } catch (error) {
      console.error('Error selecting image:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      Toast.success('Signed out!');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager />
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
