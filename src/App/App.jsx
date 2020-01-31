import React from 'react';
import Typography from '@material-ui/core/Typography';
import logo from '../static/logo.svg';
import { useStyles } from './styles';

// eslint-disable-next-line react/prop-types
export const App = ({ press }) => {
  const { app, appLogo, appHeader, appLink } = useStyles();
  return (
    <div className={app}>
      <Typography variant="h1">Title</Typography>
      <Typography variant="h2">SubTitle</Typography>
      <header className={appHeader}>
        <img src={logo} className={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => press()}>Start</button>
      </header>
    </div>
  );
};
