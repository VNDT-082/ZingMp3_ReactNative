import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import ListItem1 from './ListItem1';
import { AppColor } from '../assets/AppColor';

interface ListSongProps {
    ListSong: TopSongModel[]
}
const List1 = (props: ListSongProps) => {
    const { ListSong } = props;
    console.log('list length', ListSong.length);
    return (
        <>


            {ListSong.length > 1 ? ListSong.map((item) => {
                return <ListItem1 SongItem={item} key={item.id} />
            }) :
                <View style={{
                    width: "100%", height: 400,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={AppColor.Blue1} />
                    <Text style={{
                        color: AppColor.Blue1,
                        fontSize: 20
                    }}>Loading...

                    </Text>

                </View>
            }

        </>
    )
}

export default List1