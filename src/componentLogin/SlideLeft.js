import React, { Component } from 'react'

export default class SlideLeft extends Component {
    render() {
        return (
            <div className="mystyle2">
                  <h1 className="heading-left">{this.props.content1}</h1>
                  <p>{this.props.content2}</p>
                  <a className="text-white gohome" href="https://projectteam4.tk/">Trang chủ</a>
                </div>
        )
    }
}
