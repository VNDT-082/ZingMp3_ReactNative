import { View, Text } from 'react-native'
import React from 'react'
import { Microphone2, SearchStatus } from 'iconsax-react-native'
import { AppColor } from '../assets/AppColor'

const HeaderMenu = () => {
    return (
        <View style={{
            height: 50, marginTop: 10, flex: 1, flexDirection: 'row',
            maxHeight: 50, backgroundColor: AppColor.BackGround1, zIndex: 100
        }}>
            <Text style={{
                width: '80%', height: 50, color: AppColor.Blue1,
                fontSize: 21, fontWeight: 'bold', paddingLeft: 20,
            }}>VNDT-082</Text>
            <View style={{
                width: '20%', flex: 1, flexDirection: 'row', height: 50,
            }}>
                <Microphone2 size="32" color={AppColor.Snow1} variant="Bold" />
                <SearchStatus size="32" color={AppColor.Snow1} variant="Bold" />
            </View>
        </View>
    )
}

export default HeaderMenu;