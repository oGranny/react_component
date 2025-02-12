import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function CounterWidget() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <button onClick={() => setCount(count + 1)} style={{
        padding: "5px 10px",
        borderRadius: "4px",
        border: "none",
        background: "#007bff",
        color: "white",
        cursor: "pointer"
      }}>
        Click Me
      </button>
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>{count}</span>
    </div>
  );
}

// Expose the function globally
window.renderCounterWidget = (elementId) => {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(React.createElement(CounterWidget));
};
