import React from 'react';
import './style.scss';
import TaskItem from './../Item/index';

export default ({ list = [], authenticated, onRemoveTask }) => {
  return (
    <div className="task__list">
      { list.map(task => (
        <TaskItem
          key={ task.id }
          task={ task }
          authenticated={ authenticated }
          onRemoveTask={ () => onRemoveTask(task.id) }
        />
      )) }
    </div>
  );
}
