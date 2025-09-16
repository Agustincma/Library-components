import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#6200ee",
        color: "white",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {label}
    </button>
  );
}
