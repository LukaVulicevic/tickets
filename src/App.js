import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Home, AddTicket} from './pages'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/addticket'>
          <AddTicket />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
