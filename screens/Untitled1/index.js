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
    }} thumbTintColor="#ffdc00" maximumValue={15} minimumValue={13} style={{
      left: 0,
      top: 56,
      position: "absolute",
      width: 150,
      height: 40
    }} value={17} step={18} minimumTrackTintColor="#e34f4f" maximumTrackTintColor="#2ac73a" disabled={true}></Slider><FlatList renderItem={() => <View style={{
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
    }} />} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} keyExtractor={item => item.toString()} style={{
      left: 47,
      top: 142,
      position: "absolute",
      width: 100,
      height: 100
    }} horizontal={false} ListHeaderComponent={() => <Text>My list header</Text>}></FlatList><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={{
      position: "absolute",
      width: 150,
      height: 40
    }}></Slider></View>;
};

export default Untitled1;