import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import TaskInput from 'components/Task/Input';
import TaskEditableGenericView from 'views/Task/EditableGeneric';
import { loadTask, editTask } from 'store/tasks/actions';

const mapDispatchToProps = dispatch => ({
  loadTask: loadTask(dispatch),
  editTask: editTask(dispatch)
});

class TaskCreateView extends TaskEditableGenericView {
  constructor (props) {
    super(props);
    this.publishAction = this.publishAction.bind(this);
  }

  get id () {
    return this.props.match.params.id;
  }

  async publishAction ({ title, description }) {
    await this.props.editTask(this.id, { title, description });
  }
  
  async componentDidMount () {
    const task = await this.props.loadTask(this.id);
    this.setState({ task });
  }

  render () {
    const {
      state: {
        task
      },
      onChange,
      onPublish,
      goBack: onDiscard
    } = this;

    return (
      <div className="view view--task--editable view--task--edit">
        <div className="container">
          <TaskInput
            task={ task }
            onChange={ onChange }
            onPublish={ onPublish }
            onDiscard={ onDiscard }
            flow="edit"
          />
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(TaskCreateView);
