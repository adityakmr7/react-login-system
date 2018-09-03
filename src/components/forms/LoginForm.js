import React from "react";
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import isEmail from 'validator/lib/isEmail';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {},
    loading: false
  }

  onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        //.catch(err => this.setState({errors: err.response.data.errors, loading: false}))
    }
  }

  validate = (data) => {
    const errors = {};
    if(!isEmail(data.email)) errors.email = "Invalid Email";
    if(!data.password) errors.password = "Invalid Password";
    return errors;
  }

  render() {
    const {data, errors} = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="Email">Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@example.com'
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>
        <Button>Login</Button>
      </Form>
    );
  }
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
