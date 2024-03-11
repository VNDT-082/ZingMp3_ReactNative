import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HeaderMenu from '../../components/HeaderMenu';
import { AppColor } from '../../assets/AppColor';



const VERSION = '1.6.34';
const URL = 'https://zingmp3.vn';
const SECRET_KEY = '2aa2d1c561e809b267f3638c4a307aab';
const API_KEY = '88265e23d4284f25963e6eedac8fbfa3';
const CTIME = String(Math.floor(Date.now() / 1000))

const HomeScreen = () => {

    const [dataHome, setDataHome] = useState([]);


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