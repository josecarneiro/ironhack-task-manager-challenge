import GenericView from 'views/Generic';
import './style.scss';

// Generic Authentication View
// Should contain methods and state common to authentication views

export default class GenericAuthenticationView extends GenericView {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit ({ username, password }) {
    try {
      await this.onAutheticationAction({ username, password });
      this.redirectToHome();
    } catch (error) {
      console.log(error);
    }
  }
};
