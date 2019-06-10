import React from 'react';
import './style.scss';
import GenericButton from 'components/Generic/Button';
import { date as filterDate } from 'filters';

export default ({ task, authenticated, onRemoveTask }) => {
  return (
    <div className="task__item">
      <GenericButton
        className="task__item__body"
        link={ `/task/${ task.id }` }
      >
        <span className="task__item__title">{ task.title }</span>
        <small>{ filterDate(task.updated || task.created) }</small>
      </GenericButton>
      <div className="task__item__actions">
        { authenticated && (
          <GenericButton
            icon="check"
            onClick={ onRemoveTask }
          />
        ) }
      </div>
    </div>
  );
}
