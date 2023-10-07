import React from "react";
import * as ReactDOM from "react-dom";

export default function Page() {
  //ReactDOM.render(What to show, where to show it, callfunction)
  ReactDOM.render(<h1>Hello, Next.jss!</h1>, document.getElementById("root"));
  return <h1>Hello, Next.js!</h1>;
}
