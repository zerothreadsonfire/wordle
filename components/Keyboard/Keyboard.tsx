import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Key from "../Key/Key";
import keyboardStyles from "./Keyboard.style";

const KEYS_GRID = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'CLOSE'
]

const Keyboard = () => {
  return (
    <View style={keyboardStyles.container}>
      <Key value="A"></Key>
      {
        KEYS_GRID.map((key, index) => <Key key={index} value={key}></Key>)
      }
    </View>
  )
}

export default Keyboard;