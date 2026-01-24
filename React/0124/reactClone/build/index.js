/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hello react clone!!!!!"), createElement("strong", null, "good!!!"), "hello world!");
}
console.log(Title());
render(createElement(Title, null), document.getElementById('root'));