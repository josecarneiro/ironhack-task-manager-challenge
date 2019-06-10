import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import { date as filterDate } from 'filters';
import GenericView from 'views/Generic';
import GenericButton from 'components/Generic/Button';
import GenericIcon from 'components/Generic/Icon';
import GenericLabel from 'components/Generic/Label';
import { loadTask, removeTask } from 'store/tasks/actions';

const mapStateToProps = ({ authentication }) => ({
  ...authentication
});

const mapDispatchToProps = dispatch => ({
  loadTask: loadTask(dispatch),
  removeTask: removeTask(dispatch)
});

class TaskDisplayView extends GenericView {
  constructor (props) {
    super(props);
    this.state = {
      task: {
        title: '',
        description: '',
        created: null,
        updated: null,
        owner: null
      }
    };
    this.onRemoveTask = this.onRemoveTask.bind(this);
  }

  get id () {
    return this.props.match.params.id;
  }

  get isOwned () {
    const creator = this.state.task.owner;
    const account = this.props.account && this.props.account.id;
    return creator === account;
  }

  async onRemoveTask () {
    await this.props.removeTask(this.id);
    this.redirectToHome();
  }

  async componentDidMount () {
    const task = await this.props.loadTask(this.id);
    this.setState({ task });
  }

  render () {
    const {
      state: { task },
      id,
      isOwned,
      onRemoveTask
    } = this;

    return (
      <div className="view view--task--display">
        <div className="container">
          <div className="task__title">
            <GenericLabel text="Task Title" />
            <h1>{ task.title }</h1>
          </div>
          <div className="task__details">
            <div>
              <GenericLabel text="Creation Date" />
              <small>{ filterDate(task.created) }</small>
            </div>
            { task.updated && (
              <div>
                <GenericLabel text="Update Date" />
                <small>{ filterDate(task.updated) }</small>
              </div>
            ) }
            <div>
              <GenericLabel text="Owner" />
              <small className="detail__iconed">
                { isOwned && <GenericIcon icon="how_to_reg" /> }
                { isOwned ? 'Owned by me' : 'Not owned by me' }
              </small>
            </div>
          </div>
          { task.description && (
            <div className="task__description">
              <GenericLabel text="Description" />
              <p>{ task.description }</p>
            </div>
          ) }
          <div className="btn__group">
            <GenericButton icon="edit" text="Edit" link={ `/task/${ id }/edit` } />
            <GenericButton icon="check" text="Mark as Completed" onClick={ onRemoveTask } />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDisplayView);
