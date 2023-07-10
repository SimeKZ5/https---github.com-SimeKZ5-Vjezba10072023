import React, { useState } from "react";
import Komponenta1 from "./components/funkcija";
import Komponenta2 from "./components/funkcija copy";

const ToggleButton = ({ toggleCallback }) => {
  const handleClick = () => {
    toggleCallback();
  };

  return <button onClick={handleClick}>Toggle</button>;
};

function App() {
  const [uvjet, setUvjet] = useState(true);

  const toggleUvjet = () => {
    setUvjet(!uvjet);
  };

  return (
    <div>
      {uvjet ? <Komponenta1 /> : <Komponenta2 />}
      <ToggleButton toggleCallback={toggleUvjet} />
    </div>
  );
}

export default App;
