import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Buttons } from '../../component'

const Notification = () => {
    const [angka,setAngka] = useState(0);

    const handleClcik = () =>{
        setAngka(angka + 1);
    }
    return (
        <View style={styles.pages}>
            <View style={{ backgroundColor: 'blue',height: 50, width: 50, marginLeft: 10}}></View>
            <View style={{ backgroundColor: 'pink',height: 50, width: 50, marginLeft: 10}}>
                <Text>{angka}</Text>
            </View>

            <View style={{ backgroundColor: 'yellow',height: 80, width: '100%', marginLeft: 10}}>
                <Buttons title="Count" onPress={handleClcik}/>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    pages : {
        flex: 1,
        backgroundColor: 'red',
    }
})
