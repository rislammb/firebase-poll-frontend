import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PollProvider } from './context/poll-provider';
import Home from './components/Home';
import Polls from './components/Polls';
import NewPoll from './components/NewPoll';
import Poll from './components/Poll';

axios.defaults.baseURL = '..................';

const App = () => {
  return (
    <PollProvider>
      <Router>
        <div className='container py-3'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/polls' component={Polls} />
            <Route exact path='/poll' component={NewPoll} />
            <Route exact path='/poll/:pollId' component={Poll} />
          </Switch>
        </div>
      </Router>
    </PollProvider>
  );
};

export default App;
