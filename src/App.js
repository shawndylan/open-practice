import React from 'react';
import "./App.css";
import Nav from './nav';
import Atlas from './pages/Atlas';
import CardContainer from './components/CardContainer';
import Manual from './pages/Manual';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: CardContainer
    }
  }



render () {
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Atlas" component={Atlas}/>
          <Route path="/Index" render={(props) => <CardContainer key={props.location.key}/>}/>
          <Route path="/Manual" component={Manual}/>
        </Switch>

      </div>
      </Router>

      );
}
}



export default App;
