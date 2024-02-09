import React from "react";

 class StateCheck extends React.Component{
    constructor(){
        super();
        this.state ={
            name: 'Mukesh',
            email: 'abc@gmail.com'
        }
    }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
            </div>
        )
    }
}
export default StateCheck;

