import { Component } from "react";
import DummyCard from "./DummyCard";
import DummyCard2 from "./DummyCard2";

class About extends Component{
    constructor(){
        super();
        this.state={
            UserInfo:{
                avatar_url:"Priya",
                created_at:"XXXX",
                following:"yyyy"
            }
        }
    }

    render(){
        console.log(this.state.UserInfo);
        const {avatar_url,created_at,following} = this.state.UserInfo;
        return (
            <div>
                <img src={avatar_url}></img>
                <h1>{created_at}</h1>
                <h1>{following}</h1>
                {/* <DummyCard/>
                <DummyCard2/> */}
            </div>
        )
    }

     async componentDidMount(){
        const Data = await fetch("https://api.github.com/users/Priya2247");
        const json = await Data.json();
        console.log(json);
        this.setState({UserInfo:json});
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }
}

export default About;