import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import TaskInput from 'components/Task/Input';
import TaskEditableGenericView from 'views/Task/EditableGeneric';
import { addTask } from 'store/tasks/actions';

const mapDispatchToProps = dispatch => ({
  addTask: addTask(dispatch)
});

class TaskCreateView extends TaskEditableGenericView {
  constructor (props) {
    super(props);
    this.publishAction = this.publishAction.bind(this);
  }

  async publishAction ({ title, description }) {
    await this.props.addTask({ title, description });
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
      <div className="view view--task--editable view--task--create">
        <div className="container">
          <TaskInput
            task={ task }
            onChange={ onChange }
            onPublish={ onPublish }
            onDiscard={ onDiscard }
            flow="create"
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
