import React, { Fragment } from 'react';
import './style.scss';
import GenericButton from 'components/Generic/Button';

export default ({ account, signOut }) => (
  <header className="navbar">
    <div className="container">
      <GenericButton icon="details" text="Task Manager" link="/" />
      { !account ? (
          <Fragment>
            <GenericButton link="/authentication/sign-up">Sign Up</GenericButton>
            <GenericButton link="/authentication/sign-in">Sign In</GenericButton>
          </Fragment>
        ) : (
          <GenericButton onClick={ signOut }>Sign Out</GenericButton>
        )
      }
    </div>
  </header>
);
