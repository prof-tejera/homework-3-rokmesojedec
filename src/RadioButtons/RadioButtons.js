import { Component } from 'react';
import RadioButton from 'components/RadioButton/RadioButton';
import './RadioButtons.scss';

class RadioButtons extends Component {
  value;
  updateValue = (value) => {
    this.value = value;
    console.log(`${this.props.name}: ${this.value}`);
  }
  render() {
    let items = this.props.buttons.map((item, i) => {
      return <RadioButton 
                key={i} 
                text={item.text} 
                name={this.props.name} 
                value={item.value} 
                disabled={item.disabled}
                radioClick={() => { this.updateValue(item.value) }} 
                />
    })
    return <form className="radioBtnPanel">
      {items}
    </form>
  }
}

export default RadioButtons;
