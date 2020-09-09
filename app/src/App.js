import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';

function App() {
  return (
    <div className = "App">
      <SplitPane split = "vertical" defaultSize = "50%">
        <div className = "editor-panel">
        </div>
        <div className = "view-pane">          
        </div>
      </SplitPane>
    </div>
  );
  
}

export default App;
