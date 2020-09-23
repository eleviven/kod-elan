import React from "react";

function Button({ children, label }) {
  return <button className="">{label ? label : children}</button>;
}

export default Button;
