import { pages } from './pages'; /** Centralize pages, please do the same with components */

import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Entry } = pages;



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Entry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
