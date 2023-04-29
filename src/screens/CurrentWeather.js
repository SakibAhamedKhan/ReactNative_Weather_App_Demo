import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType"


const CurrentWether = ({ weatherData }) => {
  const { wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles

  console.log(weatherData)

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData
  const weatherConditions = weather[0].main
  console.log(weatherType[weatherConditions])

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherConditions.backgroundColor]}]}>
      <View style={container}>
        <Feather name={weatherType[weatherConditions].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText messageOne={`High: ${temp_max}`} messageOneStyles={highLow} messageTwo={`Low: ${temp_min}`} messageTwoStyles={highLow} containerStyles={highLowWrapper}/>

      </View>
      <RowText messageOne={weather[0].description} messageOneStyles={description} messageTwo={weatherType[weatherConditions].message} messageTwoStyles={message} containerStyles={bodyWrapper}/>
      {/* <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View> */}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    //backgroundColor: 'pink',
    flex: 1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  tempStyles:{
    color: 'black',
    fontSize: 48,
  },
  feels:{
    fontSize: 30,
    color:'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description:{
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  }
})
export default CurrentWether 