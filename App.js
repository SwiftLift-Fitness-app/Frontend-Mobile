import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

export default function App() {

    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'none'
  },
});















































/* const [isNotHome, setIsNotHome] = useState(false);

  function notHome() {
    setIsNotHome(true);
  }

  if(!isNotHome) {
    return (
      <BrowserRouter>
          <HomePage outHome={notHome}/>
          <Routes>
              <Route path="/login" element={<Login/>}/>
          </Routes>              
      </BrowserRouter>
    );
  }
  <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>}/>
          </Routes>              
  </BrowserRouter> */