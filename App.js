const heading = React.createElement("div",{},
            React.createElement("div",{},
                [React.createElement("h1",{id : "heading"}, "inside nest loops"),
                React.createElement("h1",{id : "heading"}, "same same...")
                ]
            )
        )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)