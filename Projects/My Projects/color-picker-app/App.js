import { useState } from "react";
import "./App.css";

import Container from "./components/Container";
import Screen from "./components/Screen";
import Selector from "./components/Selector";

function App() {
  const [rgba, setRGBA] = useState({
    color:    '#000000',
    opacity:  100
  });


  function handlechange(e) {
    const { name, value } = e.target;

    setRGBA({...rgba, [name]: value})
  }


  return <Container title='Color Picker'>
    <Screen color={rgba.color} opacity={rgba.opacity} />
    <Selector
    color={rgba.color}
    opacity={rgba.opacity}
    onChange={handlechange}
    />
  </Container>
}

export default App;
