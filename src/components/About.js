import { Component } from "react";
import DummyCard from "./DummyCard";
import DummyCard2 from "./DummyCard2";

class About extends Component{
    constructor(){
        super();
        console.log("called first thankyou");
        this.state = {
            count:0
        }
    }
    render(){
        console.log("rendered");
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Click me</button>
                <h1>{this.state.count}</h1>
                <DummyCard/>
                <DummyCard/>
                <DummyCard2/>
                <DummyCard2/>
            </div>
        );
    }

    componentDidMount(){
        console.log("called last thankyou");
    }

}

export default About;