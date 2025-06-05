import React from "react";
import ReactDom from "react-dom";
class Usercls extends React.Component{
    constructor(props){
        super(props);
        // console.log("child const");
        this.state = {
            userInfo : {
            name:"dummy",
            login:"dummyLogin"
            }
        }
    }
    async componentDidMount(){
        // console.log("child mount");
        //Api call
        const data = await fetch("https://api.github.com/users/veerendra45");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })

        console.log(json);
    }
    render(){
        const{avatar_url, name, login} = this.state.userInfo;
        // console.log("child render");
        return(
            <div className="user-card">
                <img className="avatar-img" src={avatar_url} alt="sample"/>
                <h2>Name : {name}</h2>
                <h3>Location : {login}</h3>
                <h3>Contact : veeras@462005</h3>
            </div>
        )
    }
}

export default Usercls;