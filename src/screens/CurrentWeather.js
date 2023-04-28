import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import RowText from "../components/RowText";

const CurrentWether = () => {
  const { wrapper, container,temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageOneStyles={highLow} messageTwo={'Low: 6'} messageTwoStyles={highLow} containerStyles={highLowWrapper}/>

      </View>
      <RowText messageOne={'Its sunny'} messageOneStyles={description} messageTwo={'Its perfect t-shirt weather'} messageTwoStyles={message} containerStyles={bodyWrapper}/>
      {/* <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View> */}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'pink',
    flex: 1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  temp:{
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