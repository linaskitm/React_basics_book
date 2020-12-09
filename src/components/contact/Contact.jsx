import React, { Component } from 'react'
import './contact.css'



class Contact extends Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
        
    }
    makeOlder() {
        this.setState({
            age: this.state.age + 20
        })
        console.log(this.state.age)
    }

  
    render() {
        return (
            <div className="contact-card">
             <h3>Name: {this.props.name}</h3>
             <p>Email: {this.props.email}</p>
             <p>Amzius: {this.state.age}</p>
             <button className="btn btn-primary" onClick={this.makeOlder.bind(this)}>Click</button>
         </div>

            
        )
    }

}

export default Contact