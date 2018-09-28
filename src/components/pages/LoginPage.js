import React from 'react';
import {Grid} from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';
import './login.css';

class LoginPage extends React.Component {
  submit = (data) => this.props.login(data).then(()=>this.props.history.push("/"));
  render() {
    return (
      <div className="ui container login">
        <Grid columns={2} padded='horizontally'>
          <Grid.Column>
            <h1>Login To Explore</h1>
          </Grid.Column>
          <Grid.Column width={8}>
            <LoginForm submit={this.submit}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,

}

export default connect(null, {login})(LoginPage);
