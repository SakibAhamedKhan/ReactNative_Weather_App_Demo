import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()
  const { container } = styles

  if(weather && weather.list) {
    return (
      <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
      
    )
  }

  return (
    <View style={container}>
        {loading ? <ActivityIndicator size={'large'} color={'blue'}/> : <ErrorItem />}
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
export default App