import React, { Component } from 'react'

export default class HeadingRight extends Component {
    render() {
        return (
            <h1 className="heading-right">{this.props.content}</h1>
        )
    }
}
