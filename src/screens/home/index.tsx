import { View, Text } from 'react-native'
import React from 'react'
import HeaderMenu from '../../components/HeaderMenu';
import { AppColor } from '../../assets/AppColor';

const HomeScreen = () => {
    return (
        <View style={{
            backgroundColor: AppColor.BackGround1, height: '100%'
        }}>
            <HeaderMenu />
            <View>
                <Text style={{ color: AppColor.Snow1 }}>HomeScreen</Text>
            </View>
        </View>
    )
}

export default HomeScreen;