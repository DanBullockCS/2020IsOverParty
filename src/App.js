import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import GetDate from './GetDate';

const btnStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetDate/>
        <Button
          className={btnStyles().button}
          variant="contained"
          color="secondary"
          startIcon={<Icon>home</Icon>}
          href="http://danbullock.me"
          target="_blank">
          My Website
        </Button>
      </header>
    </div>
  );
}

export default App;
