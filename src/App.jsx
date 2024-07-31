import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Weather from "./Components/Weathercomp/Weather";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <>
<Weather></Weather>
  </>;
}

export default App;
