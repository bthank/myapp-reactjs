import React, {Component} from 'react';
import Ninjas from './Ninjas';


function App() {




  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome!</p>
      <Ninjas name="John" age="27" belt="red" />
      <Ninjas name="Bill" age="35" belt="purple" />
    </div>
  );
}

export default App;
