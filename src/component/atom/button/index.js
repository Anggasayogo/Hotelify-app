import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils';

const Buttons = ({onPress,title}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Buttons;

const styles = StyleSheet.create({
    btn : {
        backgroundColor: colors.button.bg,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    title:{
        color: 'white',
        fontFamily: fonts.primary[400],
        fontSize: 24,
    }
})
