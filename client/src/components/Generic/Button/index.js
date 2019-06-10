import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import GenericIcon from './../Icon';

const GenericButtonInner = ({ children, icon, text }) => (
  <Fragment>
    { icon && (
      <GenericIcon icon={ icon } />
    )}
    { text && (
      <span>{ text }</span>
    )}
    { children }
  </Fragment>
);

export default ({ children, link, action = 'button', inverted, ...props }) => {
  const inner = <GenericButtonInner { ...props }>{ children }</GenericButtonInner>;
  const classes = [ 'btn', ...inverted ? [ 'btn--inverted' ] : [] ];
  return ( !link ? (
    <button className={ classes.join(' ') } type={ action } { ...props } >{ inner }</button>
  ) : (
    <Link className={ classes.join(' ') } to={ link } { ...props } >{ inner }</Link>
  ));
};
