import React from 'react';
import logo from '../../logo.svg';

export default class Home extends React.Component {

    constructor(props){
        super()
    }
    render(){
        return (<div>

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Home/> */}

        </header>
      </div>

        </div>)
    }
}