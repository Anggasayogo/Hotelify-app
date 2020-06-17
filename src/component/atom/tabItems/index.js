import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcHomeDis, IcSearchDis, IcNotifDis, IcProfileDis, IcHomeAc, IcSearchAc, IcNotifAc, IcProfileAc } from '../../../assets/';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabItems = ({title,active,onPress,onLongPress}) => {
    const Icon = () =>{
        if(title == 'Home'){
            return  active ? <IcHomeAc/> : <IcHomeDis/>
        }else if(title == 'Search'){
            return active ? <IcSearchAc/> : <IcSearchDis/>
        }else if(title == 'Notification'){
            return active ? <IcNotifAc/> : <IcNotifDis/>
        }else if(title == 'Profile'){
            return active ? <IcProfileAc/> : <IcProfileDis/>
        }

        return <IcHomeDis/>
    }
    return (
       <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
           <Icon/>
       </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
})
