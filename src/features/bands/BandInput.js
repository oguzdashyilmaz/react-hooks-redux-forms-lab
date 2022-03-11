import React from "react";
import {useState} from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name
            <input type="text" onChange={handleChange} value={name} />
          </label>
        </p>
        <button type="submit">Add Band</button>
      </form>
    </div>
  );
}

export default BandInput;