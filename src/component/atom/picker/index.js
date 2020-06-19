import React,{useState} from 'react'
import { StyleSheet, Picker, View } from 'react-native'

const SelOpt = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, backgroundColor: '#595959',borderRadius: 5,color: '#ffff'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

export default SelOpt;

const styles = StyleSheet.create({})
