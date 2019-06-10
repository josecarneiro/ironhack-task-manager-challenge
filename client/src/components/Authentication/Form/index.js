import React, { Component } from 'react';
import './style.scss';
import GenericButton from 'components/Generic/Button';
import GenericForm from 'components/Generic/Form';

class AuthenticationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onChange (property, value) {
    this.setState({ [ property ]: value });
  }

  async onSubmit () {
    const { state: { username, password }, props: { onSubmit } } = this;
    await onSubmit({ username, password });
  }

  render () {
    const {
      state: {
        username,
        password
      },
      props: {
        action
      },
      onChange,
      onSubmit
    } = this;

    return (
      <GenericForm onSubmit={ onSubmit }>
        <input
          placeholder="Username"
          type="text"
          value={ username }
          onChange={ event => onChange('username', event.target.value) }
          autoFocus
          autoCapitalize="off"
          spellCheck="off"
          autoCorrect="off"
          autoComplete="off"
          minLength="7"
        />
        <input
          placeholder="Password"
          type="password"
          value={ password }
          onChange={ event => onChange('password', event.target.value) }
          minLength="7"
        />
        <GenericButton
          action="submit"
          text={ action }
        />
      </GenericForm>
    );
  }
};

export default AuthenticationForm;
