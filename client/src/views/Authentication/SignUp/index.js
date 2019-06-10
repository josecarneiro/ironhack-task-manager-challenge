import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import AuthenticationForm from 'components/Authentication/Form';
import GenericAuthenticationView from 'views/Authentication/Generic';

import { signUp } from 'store/authentication/actions';

const mapDispatchToProps = dispatch => ({
  signUp: signUp(dispatch)
});

class AuthenticationSignInView extends GenericAuthenticationView {
  constructor (props) {
    super(props);
    this.onAutheticationAction = this.onAutheticationAction.bind(this);
  }

  async onAutheticationAction ({ username, password }) {
    await this.props.signUp({ username, password });
  }
  
  render () {
    const { onSubmit } = this;
    return (
      <div className="view view--authentication view--authentication--sign-up">
        <div className="container">
          <h1>Sign Up</h1>
          <h3>By signing up you'll be able to add and edit tasks</h3>
          <AuthenticationForm onSubmit={ onSubmit } action="Sign Up"/>
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(AuthenticationSignInView);
