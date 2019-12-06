import React from 'react';
import './App.css';
import Hello from './Hello';

class App extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, info) {
    console.log('error', error)
    console.log('info', info)
    const error_str = JSON.stringify(error);
    const info_str = JSON.stringify(info);
    console.log('error_str', error_str);
    console.log('error info', info_str);
  }

  render() {
    return (
      <div className="App">
        <header >
        </header>
        <Hello />
      </div>
    );
  }
}

export default App;
