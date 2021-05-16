import React, {Component} from 'react';

export default class Button extends Component {
  render () {
    return (
      <div className="signup-button">
        <a
          className="btn btn-primary btn-signup"
          type="button"
          href={this.props.mylink}
        >
          {this.props.content}
        </a>
      </div>
    );
  }
}
