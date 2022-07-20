import React from "react";
import { View, ImageBackground } from "react-native";

const Appmenu = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://crowdbotics-slack-dev.s3.amazonaws.com/media/components/screens/react-native-app-menu_dhMpRQp.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center",
      left: 20,
      top: 0
    }}>
        </ImageBackground>
      </View>;
};

export default Appmenu;