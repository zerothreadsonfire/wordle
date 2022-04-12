import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import keyboardStyles from "./Keyboard.styles";

const APLHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Keyboard = () => {
  return (
    <View style={keyboardStyles.container}>
      {APLHABETS.map((value, index) => {
        return (
          <View key={index} style={keyboardStyles.key}>
            <Button title={value} onPress={() => {}}></Button>
          </View>) 
      })}
    </View>
  )
}

export default Keyboard;