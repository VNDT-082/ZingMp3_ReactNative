import { View, Text, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppColor } from '../../assets/AppColor';
import HeaderMenu from '../../components/HeaderMenu';
import axios from 'axios';
import ListItem1 from '../../components/ListItem1';


const ZingChart = () => {
    const [total, setTotal] = useState(0);
    const [data, setData] = useState<TopSongModel[]>([]);
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1')
                .then(response => {
                    setData(response.data.data.song);
                    setTotal(data.length);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        fetchData();
    }, [])
    return (
        <View style={{
            backgroundColor: AppColor.BackGround1, height: '100%',
            flex: 1, flexDirection: 'column'
        }}>
            <View style={{
                zIndex: 100, backgroundColor: AppColor.BackGround1,
                position: 'absolute', width: '100%'
            }}>
                <HeaderMenu />
            </View>

            <ScrollView style={{
                paddingTop: 60, marginBottom: 150,
                paddingBottom: -50
            }}>
                <Text style={{
                    fontWeight: 'bold', color: AppColor.Snow1,
                    paddingLeft: 10
                }}>Bảng xếp hạng</Text>
                {data.length > 20 ? data.slice(0, 20).map((item, index) => {
                    return <ListItem1 SongItem={item} />
                })
                    :
                    data.map((item, index) => {
                        return <ListItem1 SongItem={item} />
                    })
                }
                {total > 20 ? <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <View style={{
                        marginBottom: 50,
                        height: 40,
                        borderColor: AppColor.Blue1,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderRadius: 100,
                        width: 200,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button
                            title='Xem thêm'
                            color={AppColor.BackGround1}
                        />
                    </View>
                </View> : <></>}



            </ScrollView>
        </View>

    )
}

export default ZingChart;