import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppColor } from '../assets/AppColor';
import { Component, MoreSquare } from 'iconsax-react-native';

interface SongItemProps {
    SongItem: TopSongModel
}
const ListItem1 = (props: SongItemProps) => {
    const { SongItem } = props;
    console.log("song props>>", SongItem);
    return (
        <View style={{
            flex: 1, flexDirection: 'row',
            marginBottom: 10, marginTop: 10, paddingLeft: 10, paddingRight: 10
        }}>
            <Image style={{ width: 50, height: 50, borderRadius: 5 }}
                source={{
                    uri: SongItem.thumbnail,
                }}
            />
            <View style={{
                flexDirection: 'column', width: '80%',
                paddingLeft: 10, justifyContent: 'center'
            }}>
                <Text style={{ color: AppColor.Snow1, fontWeight: 'bold' }}>
                    {SongItem.position + " " + SongItem.name}</Text>
                <Text style={{ color: AppColor.Snow1 }}>
                    <Component size="10" color={AppColor.Snow1} variant="Bold" />
                    {" " + SongItem.performer}
                </Text>
            </View>
            <View style={{ marginEnd: 0, justifyContent: 'center' }}>
                <MoreSquare size="32" color={AppColor.Gray31} variant="Bold" />
            </View>
        </View>
    )
}

export default ListItem1