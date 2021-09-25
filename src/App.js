import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.scss';

class App extends Component {
  render() {
    const radioButtons = [{
      text: "Apple",
      value: 1,
      checked: true
    },
    {
      text: "Pear",
      value: 2
    },
    {
      text: "Orange",
      value: 3,
      disabled: true
    },{
      text: "Kiwi",
      value: 4
    }]

    
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Login form component</header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component</header>
          <div className="App-content">
            <Pager start="1" end="15" current="4" compact={true} />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component</header>
          <div className="App-content">
            <RadioButtons buttons={radioButtons} name="demo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
