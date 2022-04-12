import Header from './components/Header/Header';
import { registerRootComponent } from "expo";

function App() {
  return (
    <>
      <Header name="Wordle" />
    </>
  );
}

export default registerRootComponent(App);
