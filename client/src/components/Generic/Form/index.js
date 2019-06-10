import React from 'react';
import './style.scss';

export default ({ children, onSubmit: onSubmitProp, className, ...props }) => {
  const onSubmit = event => {
    event.preventDefault();
    onSubmitProp && onSubmitProp();
  };

  return (
    <form
      className={ [ "generic-form", className ].filter(item => item).join(' ') }
      onSubmit={ onSubmit }
      { ...props }
    >{ children }</form>
  );
};
