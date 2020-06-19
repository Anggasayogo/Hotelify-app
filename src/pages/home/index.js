import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import {Ilbg, IlDubai, IlHollywod} from '../../assets';
import {Buttons, Input, CardImage, Gap, SelOpt} from '../../component';
import { fonts, colors } from '../../utils';

const Home = () => {
    return (
        <ScrollView style={styles.pages} showsVerticalScrollIndicator={false}>
            <ImageBackground source={Ilbg} style={styles.bg}>
                <Text style={styles.title}>Find a Perfect place to stay</Text>
            </ImageBackground>
            <View style={styles.content}>
                <Gap tinggi={50}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,marginRight: 5}}>
                        <Input label="Place"/>
                    </View>
                    <View>
                        <SelOpt/>
                    </View>
                </View>
                <Gap tinggi={20}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,marginRight: 5}}>
                        <Input label="Date"/>
                    </View>
                    <View>
                        <SelOpt/>
                    </View>
                </View>
                <Gap tinggi={20}/>
                <Buttons title="Search a room"/>
                <Gap tinggi={50}/>
            </View>
            <View style={styles.carousel}>
                <Gap tinggi={20}/>
                <Text style={styles.titleRec}>Recomended</Text>
                <Gap tinggi={20}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                    <CardImage image={IlHollywod} desc="Sunset Hitek" city="Dubai" retail="$100-4.2"/>
                    <CardImage image={IlDubai} desc="Lux Hotel with a Pool" city="Varice" retail="$800-5.0"/>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    titleRec: {
        fontSize: 20,
        fontFamily: fonts.primary[400],
    },
    pages: {
        flex: 1,
        backgroundColor: 'white',
    },
    carousel: {
        flex: 1,
        paddingHorizontal: 15,
    },
    title:{
        color: 'white',
        maxWidth: 350,
        fontSize: 36,
        paddingHorizontal: 15,
        paddingTop: 35,
    },
    content:{
        flex: 1,
        backgroundColor: '#393939',
        marginTop: -150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
    },
    bg: {
        width: '100%',
        height: 330,
    }
})
