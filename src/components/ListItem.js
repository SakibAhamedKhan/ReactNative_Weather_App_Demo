import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { dt_txt, min, max, conditions } = props;
    const { item, date, tmp } = styles
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={tmp}>{min}</Text>
            <Text style={tmp}>{max}</Text>
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
})
export default ListItem