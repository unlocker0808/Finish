import React, {Component} from 'react';

export default class Link extends Component {
  render () {
    return (
      <div className="mylink">
        <a href={this.props.mylink}>{this.props.content}</a>
      </div>
    );
  }
}
