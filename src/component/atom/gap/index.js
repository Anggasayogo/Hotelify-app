import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({tinggi,lebar}) => {
    return (
        <View style={styles.comp(tinggi,lebar)}>
        </View>
    )
}

export default Gap

const styles = StyleSheet.create({
    comp:(tinggi,lebar)=>(
        {
            width: lebar,
            height: tinggi,
        }
    )
})
