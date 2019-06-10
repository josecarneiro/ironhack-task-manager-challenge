import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import GenericButton from 'components/Generic/Button';
import TaskList from 'components/Task/List';

import { listTasks, removeTask } from 'store/tasks/actions';

const mapStateToProps = ({ authentication, tasks }) => ({
  ...authentication,
  ...tasks
});

const mapDispatchToProps = dispatch => ({
  listTasks: listTasks(dispatch),
  removeTask: removeTask(dispatch)
});

class TaskListView extends Component {
  constructor (props) {
    super(props);
    this.onRemoveTask = this.onRemoveTask.bind(this);
  }
  async componentDidMount () {
    await this.props.listTasks();
  }

  async onRemoveTask (id) {
    await this.props.removeTask(id);
  }

  render () {
    const {
      props: { account, list },
      onRemoveTask
    } = this;

    return (
      <div className="view view--task--list">
        <div className="container">
          { list.length ? (
              <TaskList
                list={ list }
                authenticated={ !!account }
                onRemoveTask={ onRemoveTask }
              />
            ) : (
              <div className="task__list__placeholder">
                <span>There are no tasks yet...</span>
              </div>
            )
          }
        </div>
        { account ? (
          <GenericButton
            icon="add"
            link="/task/add"
            text="Add Task"
          />
        ) : (
          <GenericButton
            icon="add"
            link="/authentication/sign-in"
            text="Sign in to Add Task"
          />
        )}
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListView);
