import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Library } from '../screens';

const LibraryNavigator = () => {
    const Tack = createNativeStackNavigator();
    return (
        <Tack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tack.Screen name='Library' component={Library} />
        </Tack.Navigator>
    )
}

export default LibraryNavigator