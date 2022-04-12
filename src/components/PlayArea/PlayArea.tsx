import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import { genRandomWord } from "../../utils/utils";

import playAreaStyles from "./PlayArea.styles";

const initGuessArray = () => {
  const arr = new Array(5).fill('');
  console.log(arr);
  return arr;
}

const PlayArea = () => {

  const [ guessWord ] = React.useState(genRandomWord);
  const [ firstWord, setFirstWord ] = React.useState(() => initGuessArray());
  const [ secondWord, setSecondWord ] = React.useState(() => initGuessArray());
  const [ thirdWord, setThirdWord ] = React.useState(() => initGuessArray());
  const [ fourthWord, setFourthWord ] = React.useState(() => initGuessArray());
  const [ fifthWord, setFifthWord ] = React.useState(() => initGuessArray());
  const [ sixthWord, setSixthWord ] = React.useState(() => initGuessArray());

  return (
    <View style={playAreaStyles.container}>
      {console.log(guessWord)}
      <View style={playAreaStyles.singleRow}>
      {
        firstWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>

      <View style={playAreaStyles.singleRow}>
      {
        secondWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>

      <View style={playAreaStyles.singleRow}>
      {
        thirdWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>

      <View style={playAreaStyles.singleRow}>
      {
        fourthWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>

      <View style={playAreaStyles.singleRow}>
      {
        fifthWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>

      <View style={playAreaStyles.singleRow}>
      {
        sixthWord.map( (cell, index ) => {
          return <View style={playAreaStyles.cell} key={index}>

          </View>
        })
      }
      </View>
      
    </View>
  )
}



export default PlayArea;