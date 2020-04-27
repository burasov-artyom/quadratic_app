import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Platform } from 'react-native';
import Home from './components/home.js';
import { Router, Scene } from 'react-native-router-flux';

export default function App() {
  return (
    <Router>
      <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
        <Scene key='home' component={Home} title='Home'></Scene>
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
