import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Consult from './Consult/Consult';
import Create from './Create/Create'
import Update from './Update/Update';
const Home = () => {
  return <Consult/>
}
const CR = () => {
  return <div><Create/></div>
}
const UP = () => {
  return <div><Update/></div>
}
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to ="/">HOME</Link></li>
        <li><Link to="/create">CREATE</Link></li>
        <li><Link to="/update">UPDATE</Link></li>
      </ul>
      <Route path="/" exact component={Home}/>  
      <Route path="/create" exact component={CR}/>
      <Route path="/update" exact component={UP}/>
    </div>
  );
}

export default App;
