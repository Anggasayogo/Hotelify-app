import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const CardImage = ({image,city,desc,retail}) => {
    return (
        <ImageBackground source={image} imageStyle={{borderRadius: 20}} style={styles.container}>
            <Text style={styles.des}>{desc}</Text>
            <View style={styles.detail} >
                <Text style={styles.col}>{city}</Text>
                <Text style={styles.col}>{retail}</Text>
            </View>
        </ImageBackground>
    )
}

export default CardImage

const styles = StyleSheet.create({
    detail:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white'
    },
    col:{
        color: 'white',
    },
    des: {
        color: 'white',
        marginLeft: 90,
    },
    container:{
        width: 265,
        height: 130,
        marginLeft: 10,
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 15,
    }  
})
