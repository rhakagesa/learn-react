import React from "react";
import { createRoot } from "react-dom/client";

function Element() {
  return <h1>Hello World!!!</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Element />);
