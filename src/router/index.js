import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Home, Splash, Search, Notification, Profile } from '../pages';
import {BottomNavigator} from '../component';


const Stack = createStackNavigator();
const Tab =  createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Notification" component={Notification}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Router = () => {    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;

const styles = StyleSheet.create({})
