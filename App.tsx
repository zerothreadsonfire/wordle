import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import Keyboard from './components/Keyboard/Keyboard';

export default function App() {
  return (
    <>
      <Header name="Wordle" />
      <GameArea></GameArea>
      <Keyboard />
    </>
  );
}
