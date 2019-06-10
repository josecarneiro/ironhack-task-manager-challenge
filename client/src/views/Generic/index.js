import { Component } from 'react';
import './style.scss';

// Generic View
// Should contain methods and state common views

export default class GenericView extends Component {
  constructor (props) {
    super(props);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  redirectToHome () {
    this.props.history.push('/');
  }

  goBack () {
    this.props.history.goBack();
  }
};
