import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from './dashboard/index.js';

// <ul>
//   <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
//   <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
// </ul>

// <Route path="/basic-routing" component={BasicRouting} />

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('main')
);
