import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import AuthenticationForm from 'components/Authentication/Form';
import GenericAuthenticationView from 'views/Authentication/Generic';

import { signIn } from 'store/authentication/actions';

const mapDispatchToProps = dispatch => ({
  signIn: signIn(dispatch)
});

class AuthenticationSignInView extends GenericAuthenticationView {
  constructor (props) {
    super(props);
    this.onAutheticationAction = this.onAutheticationAction.bind(this);
  }

  async onAutheticationAction ({ username, password }) {
    await this.props.signIn({ username, password });
  }
  
  render () {
    const { onSubmit } = this;
    return (
      <div className="view view--authentication view--authentication--sign-in">
        <div className="container">
          <h1>Sign In</h1>
          <h3>Users get to add, edit and remove tasks</h3>
          <AuthenticationForm onSubmit={ onSubmit } action="Sign In"/>
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(AuthenticationSignInView);
