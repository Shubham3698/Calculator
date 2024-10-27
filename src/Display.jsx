import React from "react";

function Display({ value }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Calculator"
      readOnly
      className="display-input"
    />
  );
}

export default Display;
