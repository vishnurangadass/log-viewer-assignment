import React from "react";

export default function Spinner() {
  return (
    <div className="spinner spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
