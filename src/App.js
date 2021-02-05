//import logo from './logo.svg';
import './App.css';
import clock from './components/clock';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App  {
 
    render() {
      return ( 
        <Router>
  
  <Route path="/" exact component={clock}/>
  </Router>
  );
}
}




export default App;
