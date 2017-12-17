import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../scenes/Home';
import Languages from '../scenes/Languages';

const Main = () => (
  <main>
    <Switch>
      <Route path={'/'} component={Home} />
      <Route path={'/languages'} component={Languages} languages={this.state.languages}/>
    </Switch>
  </main>
)


export default Main;
