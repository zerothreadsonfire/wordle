import React from "react";
import { Text, View, Button } from 'react-native';
import keyStyles from "./Key.style";
import { KeyProps } from "../../interfaces/Key.types";

const Key = (props: KeyProps) => {
  return (
    <View style={keyStyles.container}>
      <Button title={`${props.value}`} onPress={() => {console.log("click key")}} />
    </View>
  )
}

export default Key;