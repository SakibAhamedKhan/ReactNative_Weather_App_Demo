import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
    {
        "dt_txt": "2022-08-30 15:00:00",
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "main": {
            "temp": 296.76,
            "feels_like": 296.98,
            "temp_min": 296.76,
            "temp_max": 297.87,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 933,
            "humidity": 69,
            "temp_kf": -1.11
        },
    },
    {
        "dt_txt": "2022-08-30 21:00:00",
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "main": {
            "temp": 292.46,
            "feels_like": 292.54,
            "temp_min": 290.31,
            "temp_max": 292.46,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 931,
            "humidity": 80,
            "temp_kf": 2.15
        },
    },
    {
        "dt_txt": "2022-09-04 12:00:00",
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "main": {
            "temp": 294.93,
            "feels_like": 294.83,
            "temp_min": 294.93,
            "temp_max": 294.93,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 935,
            "humidity": 64,
            "temp_kf": 0
        },
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return (
            <ListItem conditions={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
        )
    }
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1,
    }
})
export default UpcomingWeather