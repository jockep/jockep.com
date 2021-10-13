import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './general.css';

//pages
import { Home } from './pages/home';

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}
