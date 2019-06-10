import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signOut } from 'store/authentication/actions';

import AppHeader from '.';

const mapStateToProps = ({ authentication }) => ({
  ...authentication
});

const mapDispatchToProps = dispatch => ({
  signOut: signOut(dispatch)
});

class NavbarWrapper extends Component {
  render () {
    return <AppHeader { ...this.props } />;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWrapper);
