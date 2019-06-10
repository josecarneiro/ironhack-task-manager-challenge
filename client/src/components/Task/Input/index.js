import React, { Component } from 'react';

import './style.scss';
import GenericButton from 'components/Generic/Button';
import GenericForm from 'components/Generic/Form';
import GenericLabel from 'components/Generic/Label';

export default class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDiscard = this.onSubmit.bind(this);
  }

  async onChange (property, value) {
    this.props.onChange({ ...this.props.task, [ property ]: value });
  }

  onSubmit () {
    const { props: { task: { title, description } } } = this;
    // const valid = Object.values({ title, description }).every(value => value.length >= 3);
    const valid = title.length >= 3;
    if (!valid) return;
    this.props.onPublish({ title, description });
  }

  onDiscard () {
    this.props.onDiscard();
  }

  render () {
    const {
      props: {
        task,
        flow = 'create'
      },
      onChange,
      onSubmit,
      onDiscard
    } = this;
    return (
      <GenericForm
        className="task__input"
        onSubmit={ onSubmit }
      >
        <GenericLabel text="Task Title" />
        <input
          className="task__input__title"
          type="text"
          placeholder="Title"
          value={ task.title }
          onChange={ event => onChange('title', event.target.value) }
          required
          minLength="3"
          maxLength="120"
          autoFocus
          autoCapitalize
        />
        <GenericLabel text="Task Description" />
        <textarea
          className="task__input__description"
          placeholder="Description"
          value={ task.description }
          onChange={ event => onChange('description', event.target.value) }
          maxLength="1000"
        />
        <div className="btn__group">
          {/* <GenericButton onClick={ onDiscard }>Discard</GenericButton> */}
          <GenericButton
            icon="undo"
            text={ flow === 'create' ? 'Discard' : 'Go Back' }
            onClick={ onDiscard }
          />
          <GenericButton
            icon="chevron_right"
            text={ flow === 'create' ? 'Publish' : 'Edit' }
            inverted
            action="submit"
          />
        </div>
      </GenericForm>
    );
  }
}
