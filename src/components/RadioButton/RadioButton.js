import React, { Component } from 'react';
import './RadioButton.scss';

class RadioButton extends Component {
    render() {
        return <>
            <input
                type="radio"
                id={this.props.text}
                name={this.props.name}
                disabled={this.props.disabled}
                checked={this.props.checked}
                onChange={() => {
                    if (!this.props.disabled)
                        this.props.radioClick()
                }} >
            </input>
            <label htmlFor={this.props.text}>
                {this.props.text}
            </label>
        </>
    }
}
export default RadioButton;
