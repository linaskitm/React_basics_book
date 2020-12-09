import React, { Component } from 'react'


export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
    }
    handleClick(e) {
        e.preventDefault()
        this.setState(prevState => {
            return {counter: prevState.counter +1}
        })
    }
       handleClick1(e) {
        e.preventDefault()
        this.setState(prevState => {
            return {counter: prevState.counter -1}
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
                <p>Like: {this.state.counter}</p>
                <a onClick={this.handleClick} href="#">Like</a>
                <a onClick={this.handleClick1} href="#"> Dislike</a>
            </div>
        )
    }
}
