import React, { Component } from 'react'

export default class ButtonSignUp extends Component {
    render() {
        return (
            <div className="signup-button"><button className="btn btn-primary btn2" type="button">{this.props.content}</button></div>
        )
    }
}
