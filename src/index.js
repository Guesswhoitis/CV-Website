import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/mainMenu/App';
import Contact from "./pages/contacts/Contact"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
