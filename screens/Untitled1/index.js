import { Text } from "react-native";
import { FlatList } from "react-native";
import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#ffdc00" maximumValue={12} minimumValue={9} style={{
      left: 35,
      top: 60,
      position: "absolute",
      width: 150,
      height: 40
    }} value={11} step={15} minimumTrackTintColor="#e34f4f" maximumTrackTintColor="#2ac73a" disabled={true}></Slider><FlatList renderItem={() => <View style={{
      width: 92,
      height: 60,
      backgroundColor: '#FFFFFF'
    }}><Text style={{
        left: 8.56005859375,
        top: 17,
        position: "absolute",
        width: 100,
        height: 50,
        lineHeight: 14,
        fontSize: 14,
        borderRadius: 0
      }}>Lorem ipsum… </Text></View>} ItemSeparatorComponent={() => <View style={{
      backgroundColor: '#000000',
      height: 1
    }} />} data={[1, 2, 3]} keyExtractor={item => item.toString()} style={{
      left: 47,
      top: 142,
      position: "absolute",
      width: 110,
      height: 140
    }}></FlatList></View>;
};

export default Untitled1;