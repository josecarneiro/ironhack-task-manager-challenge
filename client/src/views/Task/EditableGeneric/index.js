import './style.scss';
import GenericView from 'views/Generic';

export default class TaskEditableGenericView extends GenericView {
  constructor (props) {
    super(props);
    this.state = {
      task: {
        title: '',
        description: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onPublish = this.onPublish.bind(this);
  }

  async onChange (task) {
    this.setState({ task });
  }

  async onPublish ({ title, description }) {
    await this.publishAction({ title: title.trim(), description: description.trim() });
    this.redirectToHome();
  }
};
