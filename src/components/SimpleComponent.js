// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    handleClick = (e) => {
        this.setState({
            mood: "sad"
        })
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent
