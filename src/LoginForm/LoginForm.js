import { Component } from 'react';
import Panel from "./../components/Panel/Panel";
import Input from "./../components/Input/Input";
import Button from "./../components/Button/Button";

import './LoginForm.scss';

class LoginForm extends Component {
  render() {
    const variable = 1 + 50;
    return  <Panel>
      <Input type="text" placeholder="Username"></Input>
      <Input type="password" placeholder="Password"></Input>
      <Button text="Login" size="xl" color="success" />
      <p>Not registered? <a href="#">Create an account</a></p>
    </Panel>
  }
}

export default LoginForm;
