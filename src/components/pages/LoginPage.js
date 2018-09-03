import React from 'react';
import {Grid} from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';
import './login.css';

class LoginPage extends React.Component {
  submit = (data) => console.log(data);
  render() {
    return (
      <div className="ui container login">
        <Grid columns={2} padded='horizontally'>
          <Grid.Column>
            <h1>Login Form</h1>
          </Grid.Column>
          <Grid.Column width={8}>
            <LoginForm submit={this.submit}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};


export default LoginPage;
