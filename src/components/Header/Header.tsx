import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import { HeaderProps } from "../../interfaces/Header.types";

import headerStyles from "./Header.styles";

const HELP_ICON = require("../../../assets/help_outline_black_18.png");
const STATISTICS_ICON = require("../../../assets/outline_leaderboard_black_24dp.png");
const SETTINGS_ICON = require("../../../assets/outline_settings_black_24dp.png");

const Header = (props: HeaderProps) => {
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={()=>{}}>
        <Image source={HELP_ICON} style={headerStyles.icon} />
      </TouchableOpacity>
      <Text style={headerStyles.logo}>{props.name}</Text>
      <View style={headerStyles.rightIcons}>
        <TouchableOpacity onPress={()=>{}}>
          <Image source={STATISTICS_ICON} style={headerStyles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={SETTINGS_ICON} style={headerStyles.icon} /> 
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default Header;