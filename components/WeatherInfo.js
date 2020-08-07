import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
    weatherText:{
        fontSize: 15
    },
    weatherHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    }

 })


const WeatherInfo = (props) => {


   return(
       <View>
           {props.responseObj.cod === 200 &&
           <View>
                <Text style={styles.weatherHeader}>Current weather in {props.responseObj.name}</Text>
                <Text style={styles.weatherText}>Temperature: {Math.round(props.responseObj.main.temp)} C</Text>
                <Text style={styles.weatherText}>Feels like: {Math.round(props.responseObj.main.feels_like)} C</Text>
                <Text style={styles.weatherText}>{props.responseObj.weather[0].description}</Text>
            </View>
           }
            {props.responseObj.cod === 404 &&
            <View>
                <Text style={styles.weatherText}>City not found, please try another one.</Text>
           </View>
           }
       </View>
       
   );
}
export default WeatherInfo;