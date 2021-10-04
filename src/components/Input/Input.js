import { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render() {
        const type = (!this.props.type) ? "text" : this.props.type;
        return <div><input className="App-Input" type={type} value={this.props.value} placeholder={this.props.placeholder} /></div>;
    }
}

export default Input;
