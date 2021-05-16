import React, {Component} from 'react';

export default class Information extends Component {
  render () {
    return (
      <div className="text">
        <i className={this.props.icon} id="myicon" />
        <input type="text" placeholder={this.props.text} />
      </div>
    );
  }
}
