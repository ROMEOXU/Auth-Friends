import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './Login';
import PrivateRoute from './privateRoute';
import Protected from './Protected';
function App() {
  return (
  <Router> 
   <div className="App">
     {/* <Link to ='/protected'>Protected</Link> */}
     <Link to = 'login'>Login</Link>
    <Route exact path="/" component={Login} />
     <Route path="/login" component={Login} />
     <PrivateRoute path='/protected' component={Protected} />
    </div>
  </Router> 
  );
}

export default App;
