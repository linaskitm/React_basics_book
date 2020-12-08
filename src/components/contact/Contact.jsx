import React, { Component } from 'react'
import './contact.css'



class Contact extends Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAle,
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    makeOlder() {
        this.setState({
            age: this.state.age + 20
        })
        console.log(this.state.age)
    }

    handleClick() {
        this.setState(prevState => {
            return {counter: prevState.counter +1}
            
        })
    }
    render() {
        return (
            <div className="contact-card">
             <h3>Name: {this.props.name}</h3>
             <p>Email: {this.props.email}</p>
             <p>Amzius: {this.state.age}</p>
             <button className="btn btn-primary" onClick={this.makeOlder.bind(this)}>Click</button>
             <p>Like: {this.state.counter}</p>
             <a onClick={this.handleClick} href="#">Like</a>
         </div>

            
        )
    }

}

export default Contact