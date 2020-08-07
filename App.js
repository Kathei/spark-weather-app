import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherForm from './components/WeatherForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    display: 'border-box',
    textAlign: 'center'

  },
  header: {
    fontSize: 30,
    paddingBottom: 20
  },
  subHeader: {
    fontSize: 15,
    paddingBottom: 40
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check the current weather of your city!</Text>
      <Text style={styles.subHeader}>Write the name of your city to the text box below and click 'Check weather'</Text>
      <WeatherForm/>
      <StatusBar style="auto" />
    </View>
  );
}

