import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import playAreaStyles from "./PlayArea.styles";

const NUM_GUESS_IN_ONE_WORD = 5;

const initGuessArray = () => {
  const arr = new Array(NUM_GUESS_IN_ONE_WORD).fill('');
  console.log(arr);
  return arr;
}

const PlayArea = () => {

  const [ firstWord, setFirstWord ] = React.useState(() => initGuessArray());
  const [ secondWord, setSecondWord ] = React.useState(() => initGuessArray());
  const [ thirdWord, setThirdWord ] = React.useState(() => initGuessArray());
  const [ fourthWord, setFourthWord ] = React.useState(() => initGuessArray());
  const [ fifthWord, setFifthWord ] = React.useState(() => initGuessArray());
  const [ sixthWord, setSixthWord ] = React.useState(() => initGuessArray());

  return (
    <View style={playAreaStyles.container}>
      {
        firstWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
    </View>
  )
}



export default PlayArea;