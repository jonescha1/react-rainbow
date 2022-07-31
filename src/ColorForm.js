import React, { useState } from "react";

function ColorForm(props) {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (props.validColor(input)) {
      props.addColor(input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
