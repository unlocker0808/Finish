import React, {Component} from 'react';

export default class Option2 extends Component {
  render () {
    return (
      <div className="text">
        <i className="fa fa-intersex" id="myicon" />
        <div className="myradio">
          <fieldset>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                className="custom-control-input"
                name="customRadioInline"
                defaultChecked
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline1"
              >
                Nam
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                className="custom-control-input"
                name="customRadioInline"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline2"
              >
                Nữ
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
