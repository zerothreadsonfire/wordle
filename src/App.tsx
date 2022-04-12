import { registerRootComponent } from "expo";

import Header from './components/Header/Header';
import PlayArea from './components/PlayArea/PlayArea';
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <>
      <Header name="Wordle" />
      <PlayArea />
      <Keyboard />
    </>
  );
}

export default registerRootComponent(App);
