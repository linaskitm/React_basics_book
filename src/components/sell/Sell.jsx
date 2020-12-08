import React, { Component } from 'react'



export default class Sell extends Component {
    constructor(props) {
        super();
        this.state = {
            message: "Visiem nuolaida 15%"
        }
        this.getDiscount = this.getDiscount.bind(this)
    }
    getDiscount(){
        this.setState({message: "Visiem dabar 35%"})
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.getDiscount} >Daugiau</button>
            </div>
        )
    }
}