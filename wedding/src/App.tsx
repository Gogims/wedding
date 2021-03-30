import './App.scss';
import React, { Component } from 'react';
import Layout from 'src/layout/layout';

type AppProps = {
  //
};

class App extends Component<AppProps, any> {
  public render(): JSX.Element {
    return (
      <div className="app">
        <Layout />
      </div>
    );
  }
}

export default App;
