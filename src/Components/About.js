import User from "./User";
import Usercls from "./Usercls";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent const");
    }
    componentDidMount(){
        // console.log("parent mount");
    }
    render(){
        // console.log("parent render");
        return(
            <div>
                <h1>About</h1>
                <h2>This is About component</h2>
                <Usercls name={"Veerendra"} location={"Kurnool"}/>
            </div>
        )
    }
}

export default About;