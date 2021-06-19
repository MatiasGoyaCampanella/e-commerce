import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <a>{this.props.url}</a>
                <button onClick={this.props.handleClick}>x</button>
            </div>
        )
    }
}