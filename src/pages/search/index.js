import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IlDubai } from '../../assets';
import { CardImage, Serchcomp } from '../../component';
import { colors } from '../../utils';

const Search = () => {
    return (
        <View style={styles.pages}>
            <Serchcomp/>
            <View style={styles.recomcomp}>
                <Text style={styles.recomended}>Recomended</Text>
                <ScrollView horizontal={true} style={styles.recomdedscroll} showsHorizontalScrollIndicator={false}>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.deals}>Deals</Text>
                <ScrollView horizontal={true} style={styles.scrolldeals} showsHorizontalScrollIndicator={false}>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                </ScrollView>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    pages: {
        padding: 15,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between',
    },
    scrolldeals:{
        marginBottom: 30
    },
    deals:{
        marginVertical: 30,
    },
    recomcomp: {
        backgroundColor: 'white', 
    },
    recomended:{
        marginVertical: 30,
    },
    recomdedscroll:{
        marginBottom: 30,
    }
})
