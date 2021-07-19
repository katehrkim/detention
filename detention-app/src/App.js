import React from 'react';
import LineComponent from './components/LineComponent/LineComponent.js';
import './App.css';

class App extends React.Component {
  createLines = () => {
    let lines = [];
    for (let index=0; index < 100; index++) {
      lines.push(<LineComponent key={index}/>);
    }
    return lines;
  }

  render() {
    return (
      <div className="App">
        { this.createLines() }
      </div>
    );
  }
}

export default App;
