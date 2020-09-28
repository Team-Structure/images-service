import React from 'react';
import ReactDOM from 'react-dom';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>React is Working</div>
//   }
// }

var App = () => <div>React is Working</div>



ReactDOM.render(<App />, document.getElementById('app'));