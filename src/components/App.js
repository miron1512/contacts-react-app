import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Content from './Content';

const App = props => (
  <div className="App">
    <Grid>
      <Header />
      <Content />
    </Grid>
  </div>
);

export default App;
