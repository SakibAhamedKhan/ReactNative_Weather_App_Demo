import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType"
import moment from 'moment'

const ListItem = (props) => {
    console.log(props);
    const { dt_txt, min, max, conditions } = props;
    const { item, date, tmp, textWrapper } = styles
    return (
        <View style={[item, {backgroundColor: weatherType[conditions].backgroundColor}]}>
            <Feather name={weatherType[conditions].icon} size={50} color={'white'} />
            <View style={textWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={tmp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    tmp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15,
    },
    textWrapper: {
        flexDirection: 'column',

    }
})
export default ListItem