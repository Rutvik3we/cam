

import React, { Component } from 'react'

export default class Profile extends Component {

constructor(props){
    super(props);
    this.state={
        user:[]
    }
}





async refreshUser(){
    fetch("http://localhost:51294/api/GetAllValues").then(response=>response.json())
    .then(data=>{
        this.setState({user : [data]});
    })
}

componentDidMount(){
    this.refreshUser();
}

    render() {
        const{user}=this.state;
        return (
            <div>
                <h2> My Profile</h2>
            {user.map(user=>
                <p>
                    <b>FirstName : {user.Data[1].FirstName}</b>
                    
                </p>
                )}<br/>
                 {user.map(user=>
                <p>
                    <b>Last Nam : {user.Data[1].LastName}</b>
                    
                </p>
                )}
            </div>
        )
    }
}
