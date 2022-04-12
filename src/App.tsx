import { registerRootComponent } from "expo";

import Header from './components/Header/Header';
import PlayArea from './components/PlayArea/PlayArea';

function App() {
  return (
    <>
      <Header name="Wordle" />
      <PlayArea />
    </>
  );
}

export default registerRootComponent(App);
