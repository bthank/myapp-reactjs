import React, {Component} from 'react';
import Ninjas from './Ninjas';


class App extends Component {

  state = {
    ninjas: [
      { name: 'Ryu', age: '30', belt: 'black', id: 1 },
      { name: 'Jane', age: '17', belt: 'red', id: 2 },
      { name: 'Amy', age: '43', belt: 'green', id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }

}

export default App;
