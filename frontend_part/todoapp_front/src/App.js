import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// import logo from './logo.svg';

import './App.css';
import Fetcher from './components/fetchComponent';
// import Todo from './components/todoComponent';



class App extends Component {
  render() {
    return (
      <div>
        <Fetcher />
        {/* <Todo /> */}
      </div>
    );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
