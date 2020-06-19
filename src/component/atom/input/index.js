import React from 'react'
import { StyleSheet,TextInput } from 'react-native'
import { fonts } from '../../../utils'

const Input = ({label}) => {
    return (
        <TextInput style={styles.container} placeholder={label}></TextInput>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        height: 50,
        borderRadius: 5,
        backgroundColor: '#595959',
        padding: 10,
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.primary[300]
    }
})
