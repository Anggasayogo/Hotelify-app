import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {IcLogo } from '../../assets';
import { fonts } from '../../utils';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainApp');
        },3000)
    },[])
    return (
        <View style={styles.page}>
            <Image source={IcLogo} style={styles.logo}/>
            <Text style={styles.title}>Hotelify</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontFamily: fonts.primary[600],
    },
    page:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
