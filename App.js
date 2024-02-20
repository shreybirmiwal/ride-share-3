import React, { useEffect, useState } from 'react';
import Auth_nav from './navigation/Auth_nav';
import App_nav from './navigation/App_nav';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MyRideShares from './screens/MyRideShares';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [user, setUser] = useState(1);
  // const auth = getAuth();

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((authUser) => {
  //     setUser(authUser);
  //   });

  //   return unsubscribe;
  // }, []);

  return(
    <NavigationContainer>
       {user ? <App_nav /> : <Auth_nav />}
    </NavigationContainer>
  );
};

export default App;
