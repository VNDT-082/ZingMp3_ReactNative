import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeartCircle, Next, PlayCircle, RowHorizontal } from 'iconsax-react-native';
import { AppColor } from '../assets/AppColor';

//const [sourceLink, setSourceLink] = useState('https://vnso-zn-15-tf-a128-z3.zmdcdn.me/945f3ce83dd0eb820aa0e05cce267c5b?authen=exp=1710251840~acl=/945f3ce83dd0eb820aa0e05cce267c5b/*~hmac=db8dec6a19bbdd11f5bdab960320a60e&fs=MTmUsICxMDA3OTA0MDUyNHx3ZWJWNHwxNC4xOTEdUngMjUwLjEw');

var Sound = require('react-native-sound');
Sound.setCategory('Playback');
// const [sound, setSound] = useState(new Sound());
var ding = new Sound('https://vnso-zn-15-tf-a128-z3.zmdcdn.me/945f3ce83dd0eb820aa0e05cce267c5b?authen=exp=1710251840~acl=/945f3ce83dd0eb820aa0e05cce267c5b/*~hmac=db8dec6a19bbdd11f5bdab960320a60e&fs=MTmUsICxMDA3OTA0MDUyNHx3ZWJWNHwxNC4xOTEdUngMjUwLjEw',
  Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log('duration in seconds: ' + ding.getDuration()
      + 'number of channels: ' + ding.getNumberOfChannels());


  });

const BottomSound = () => {
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    }
  }, []);
  const PlayPause = () => {
    if (isPlay) {
      setIsPlay(false);
      ding.pause(() => {
        console.log('Âm thanh đã dừng');
      })
    }
    else {
      setIsPlay(true);
      ding.play(success => {
        setIsPlay(false);
        if (success) {

          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '70%', flex: 1, flexDirection: 'row' }}>
        <View style={{ width: '20%', padding: 4 }}>
          <Image
            style={{
              width: '100%', height: '100%', borderRadius: 50,
            }} source={{
              uri: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/4/7/4/8474eb9fd1a3aa78b974b4c104ff45fc.jpg?fs=MTmUsICxMDA3OTA0MDUxOHx3ZWJWNHwxNC4xOTEdUngMjUwLjEw',
            }} />
        </View>
        <View style={{
          width: '80%', flexDirection: 'column', paddingLeft: '2%',
          justifyContent: 'center'
        }}>
          <Text style={{ fontWeight: 'bold' }}>Thủy Triều</Text>

          <Text>Quang Hùng MasterD</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.playBtn}>
        <HeartCircle size="32" color={AppColor.Blue1} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playBtn} >
        {isPlay ? (<RowHorizontal size="32" color={AppColor.Blue1} variant="Bulk" onPress={PlayPause} />)
          : (<PlayCircle size="32" color={AppColor.Blue1} variant="Bold" onPress={PlayPause} />)
        }
      </TouchableOpacity>
      <TouchableOpacity style={styles.playBtn}>
        <Next size="32" color={AppColor.Blue1} variant="Bold" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: 'tranparrent',
  },
  playBtn: {
    padding: 10,
  },
});
export default BottomSound;