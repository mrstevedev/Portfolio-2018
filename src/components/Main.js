import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import NoMatch from './NoMatch';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
  <React.Fragment>
    <main>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" render={(props) => ( <Projects fontStyle="charterBlack" /> )} />
      <Route exact path="/contact" render={(props) => ( <Contact fontStyle="charterBlack" /> )} />
      <Route render={(props) => ( <NoMatch fontStyle="charterBlack" /> )} />
    </Switch>
    </main>
  </React.Fragment>
)

export default Main;
