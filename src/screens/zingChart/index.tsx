import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppColor } from '../../assets/AppColor';
import HeaderMenu from '../../components/HeaderMenu';
import axios from 'axios';
import ListItem1 from '../../components/ListItem1';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react-native';
import List1 from '../../components/List1';


const ZingChart = () => {
    const [total, setTotal] = useState(0);
    const [data, setData] = useState<TopSongModel[]>([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1')
                .then(response => {
                    setData(response.data.data.song);
                    setTotal(response.data.data.song.length);
                    // console.log(data);
                    // console.log('total', total);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        fetchData();
    }, [])
    const handlePressShowMore = () => {
        setFlag(!flag);
    }
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
                <List1 ListSong={!flag ? [...data].slice(0, 20) : data} />
                {total > 20 ? <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <TouchableOpacity style={{
                        marginBottom: 50,
                        height: 40,
                        borderColor: AppColor.Blue1,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderRadius: 100,
                        width: 200,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={handlePressShowMore}>
                        <Text style={{
                            color: AppColor.Snow1, fontSize: 15,
                            fontWeight: 'bold'
                        }}>{!flag ? 'Xem thêm ' : 'Ẩn bớt '}</Text>
                        {!flag ? <ArrowDown2 size="15" color={AppColor.Snow1} variant="TwoTone" />
                            : <ArrowUp2 size="15" color={AppColor.Snow1} variant="TwoTone" />
                        }

                    </TouchableOpacity>

                </View> : <></>}



            </ScrollView>
        </View>

    )
}

export default ZingChart;