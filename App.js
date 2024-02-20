import React, { useEffect, useState } from 'react';
import Auth_nav from './navigation/Auth_nav';
import App_nav from './navigation/App_nav';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MyRideShares from './screens/MyRideShares';
const App = () => {
  // const [user, setUser] = useState(null);
  // const auth = getAuth();

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((authUser) => {
  //     setUser(authUser);
  //   });

  //   return unsubscribe;
  // }, []);

  // return (
  //   <>
  //     {user ? <App_nav /> : <Auth_nav />}
  //   </>
  // );

  return(
    <MyRideShares/>

  );
};

export default App;
