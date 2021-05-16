import React, {Component} from 'react';

export default class loginButton extends Component {
  render () {
    return (
      <div class="login-button">
        <button class="btn btn-primary btn" type="button">{this.props.content}</button>
      </div>
    );
  }
}
