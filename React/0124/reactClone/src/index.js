/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title() {
    return (
        <div>
            <h1 className="title">hello react clone!!!!!</h1>
            <strong>good!!!</strong>
            hello world!
        </div>
    )
}

console.log(Title());

render(<Title />, document.getElementById('root'));