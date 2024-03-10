import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Library, Profile, ZingChart } from '../screens';
import { AppColor } from '../assets/AppColor';
import { ChartSquare, ElementEqual, MusicLibrary2, ProfileCircle } from 'iconsax-react-native';
import { Text, View } from 'react-native';
import BottomSound from '../components/BottomSound';


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: AppColor.bottom,
                    borderRadius: 10,
                    marginBottom: 7,
                    marginLeft: 5,
                    marginRight: 5,
                    position: 'absolute'
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: ReactNode;
                    color = focused ? AppColor.Blue1 : AppColor.Gray31;

                    switch (route.name) {
                        case 'Khám phá':
                            icon = <ElementEqual size={size} color={color} variant='Bold' />;
                            break;
                        case 'Thư viện':
                            icon = <MusicLibrary2 size={size} color={color} variant='Bold' />;
                            break;
                        case 'ZingChart':
                            icon = <ChartSquare size={size} color={color} variant='Bold' />;
                            break;
                        case 'Cá nhân':
                            icon = <ProfileCircle size={size} color={color} variant='Bold' />;
                            break;
                    }
                    return icon;
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    marginBottom: 12,
                    fontSize: 12
                },
                tabBarIconStyle: { marginTop: 8 },

            })}>
                <Tab.Screen name='Thư viện' component={Library} />
                <Tab.Screen name='Khám phá' component={HomeScreen} />
                <Tab.Screen name='ZingChart' component={ZingChart} />
                <Tab.Screen name='Cá nhân' component={Profile} />
            </Tab.Navigator>
            <View style={{
                position: 'absolute', bottom: 90, left: 0,
                right: 0, height: 50, backgroundColor: AppColor.bottom,
                borderRadius: 25, marginLeft: 5, marginRight: 5,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <BottomSound />
            </View>
        </>
    )
}

export default TabNavigator;