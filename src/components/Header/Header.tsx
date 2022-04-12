import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { HeaderProps } from "../../interfaces/Header.types";
import headerStyle from "./Header.style";


const Header = (props: HeaderProps) => {
  return (
    <View>
      {/* <Image source={require("../../assets/icon.png")} style={headerStyle.logo} /> */}
      <Text>{props.name} ok somuiubi;jb;jb'
      ujbijbui</Text>
      {/* <Image source={require("../../assets/icon.png")} style={headerStyle.logo} />
      <Image source={require("../../assets/icon.png")} style={headerStyle.logo} /> */}
    </View>
  )
}



export default Header;