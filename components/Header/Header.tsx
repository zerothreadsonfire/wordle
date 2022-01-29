import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Props } from "../../interfaces/types";
import headerStyle from "./Header.style";


const Header = (props: Props) => {
  return (
    <View style={headerStyle.container}>
      <Image source={require("../../assets/icon.png")} style={headerStyle.logo} />
      <Text>{props.name}ok</Text>
      <Image source={require("../../assets/icon.png")} style={headerStyle.logo} />
      <Image source={require("../../assets/icon.png")} style={headerStyle.logo} />
    </View>
  )
}



export default Header;