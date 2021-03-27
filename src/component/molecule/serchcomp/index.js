import React from 'react'
import { StyleSheet, TextInput, View,} from 'react-native'
import { Ilserch } from '../../../assets';

const Serchcomp = () => {
    return (
        <View style={styles.contaner}>
            <Ilserch style={styles.logo}/>
            <TextInput style={styles.input} placeholder="Search for a city, area, or a hotel"/>
        </View>
    )
}

export default Serchcomp;

const styles = StyleSheet.create({
    contaner: {
        backgroundColor: '#DFDEDE',
        opacity: 0.3,
        borderRadius: 10,
        flexDirection: 'row',
    },
    logo:{
        marginVertical: 16,
        marginHorizontal: 16
    },
    input:{
        color: '#999999',
    }
})
