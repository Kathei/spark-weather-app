import React , { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import WeatherInfo from './WeatherInfo';


const styles = StyleSheet.create ({
    viewContainer: {
       marginTop: 20,
       textAlign: 'center',
       maxWidth: 250
    },
    weatherButton: {
        width: 150,
        margin: 'auto'
       
    },
    inputBox: {
        marginBottom: 10,
        height: 25,
        borderColor: 'black',
        borderWidth: 1,
        width: 250

    }
 })

const WeatherForm = () => {

    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    
    const cityURI = encodeURIComponent(city);

    function getWeather(e) {
        e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=50f578d622c291089e8f21a8d2730398`)
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
   }

   return(
       <View style = {styles.viewContainer}>
           <TextInput 
           value={city}
           onChangeText={text => setCity(text)} 
           style={styles.inputBox} 
           />
           <View style = {styles.weatherButton}>
            <Button 
            onPress={getWeather}
            title='Check weather'
            accessibilityLabel='Check weather'
            />
           </View>
           <WeatherInfo
              responseObj={responseObj} />
       </View>
       
   );
}
export default WeatherForm;