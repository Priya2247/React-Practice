import React from "react";
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById('root'))

const heading=<h1>Hello Everyone</h1> //JSX (heading store React obj)
const Title1=()=>( //React Functional Component
     //Inside curly braces everything is treated as js executable
    <div>
    <p> Title 1 : Functional Component called as Function inside Curly braces</p>
    </div>
);

const Title2=()=>(
      <p>Title 2 : Functional Component Called as Component itself as tag</p>
);

const Title=()=>(
    <div>
        {heading}
        {Title1()}
        <Title2/>
    </div>
)

root.render(<Title/>);