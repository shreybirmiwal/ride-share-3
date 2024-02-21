import React, { useEffect, useState } from 'react';
import Auth_nav from './navigation/Auth_nav';
import App_nav from './navigation/App_nav';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import MyRideShares from './screens/MyRideShares';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return unsubscribe;
  }, []);

  return(
    <NavigationContainer>
       {user ? <App_nav /> : <Auth_nav />}
    </NavigationContainer>
  );
};

export default App;
