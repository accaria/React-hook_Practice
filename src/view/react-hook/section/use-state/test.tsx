"use client";
import { useState } from "react";

export default function MyComponent() {
 const [state, setState] = useState({
    inputValue: '',
    savedValues: []
  });

  const handleInputChange = (e) => {
    setState(prev => ({
      ...prev,
      inputValue: e.target.value
    }));
  };

  const handleSave = () => {
    if (state.inputValue.trim() !== '') {
      setState(prev => ({
        ...prev,
        savedValues: [...prev.savedValues, state.inputValue],
        inputValue: ''
      }));
    }
  };

  const handleClear = () => {
    setState(prev => ({
      ...prev,
      savedValues: []
    }));
  };

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleSave}>Save</button>

      <ul>
        {state.savedValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      {/* 👇 Show this button only if there is at least one saved item */}
      {state.savedValues.length > 0 && (
        <button onClick={handleClear}>Clear List</button>
      )}
    </div>
  );
}
