import React, { useState } from 'react' ;
import LoginScreen from '../screens/LoginScreen';
import MainNavigation from './mainNavigation';
import authService from '../services/auth';
import axios from 'axios';

export default function RootNavigation() {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = (data) => {
        authService
          .logIn(data)
          .then((token) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            setIsAuth(true);
          })
          .catch(console.log('alal'));
    };

    if (isAuth) {
        return <MainNavigation />; 
    } else {
        return <LoginScreen handleLogin={handleLogin} />;
    }
}