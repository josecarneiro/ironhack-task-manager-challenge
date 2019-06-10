import React from 'react';
import './style.scss';
import MaterialIcon from '@material/react-material-icon';
 
export default props => {
  return (
    <MaterialIcon className="icon generic-icon" icon={ props.icon } />
  );
};
