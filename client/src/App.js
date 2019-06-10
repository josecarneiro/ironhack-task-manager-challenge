import React, { Component, Fragment } from "react";
import { Provider, connect } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router'
import './App.scss';
// import AppNavbar from './components/Navbar';
import AppNavbar from './components/Navbar/wrapper';
import Routes from './router';

import { store, history } from './store';

import { loadAccount } from 'store/authentication/actions';

const mapStateToProps = ({ account }) => ({
  account
});

const mapDispatchToProps = dispatch => ({
  loadAccount: loadAccount(dispatch)
});

class StartUpInner extends Component {
  componentDidMount () {
    this.props.loadAccount();
  }

  render () {
    return (
      <Fragment>{ this.props.children }</Fragment>
    );
  }
};

const StartUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartUpInner);

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <StartUp>
          <Router history={ history }>
            <Fragment>
              <AppNavbar />
              <Routes />
            </Fragment>
          </Router>
        </StartUp>
      </Provider>
    );
  }
};

export default App;
