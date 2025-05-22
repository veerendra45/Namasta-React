import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("div",{},
            React.createElement("div",{},
                [React.createElement("h1",{id : "heading"}, "inside nest loops"),
                React.createElement("h1",{id : "heading"}, "same as before ...")
                ]
            )
        )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)