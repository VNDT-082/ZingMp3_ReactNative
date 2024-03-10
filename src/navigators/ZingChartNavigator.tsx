import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ZingChart } from '../screens';

const ZingChartNavigator = () => {
    const Tack = createNativeStackNavigator();
    return (
        <Tack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tack.Screen name='ZingChart' component={ZingChart} />
        </Tack.Navigator>
    )
}

export default ZingChartNavigator