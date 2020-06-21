import React from 'react';

import './App.css';
import Form from'./components/form/form'


class App extends React.Component {
  
  render(){
        return (
        <div className="App">
          <header className="App-header">
          <h2>Ciao</h2>
            
            
            <Form></Form>
            
          </header>
        </div>
      );
    }
  }

export default App;
