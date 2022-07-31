import React, { useState } from "react";
import "./App.css";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

function App() {
  let [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const validColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
  };

  let colorMap = colors.map((color, index) => {
    return <ColorBlock key={index} color={color} />;
  });

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} validColor={validColor} />
    </div>
  );
}

export default App;
