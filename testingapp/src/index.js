import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Trades from './Trades/Trades';
import Exceptions from './Exceptions/Exceptions';
import Admin from './Admin/Admin';
import NotFound from './NotFound/NotFound';
import TestingMiniDrawer from './TestingMiniDrawer/TestingMiniDrawer';
import TestingFooter from './TestingFooter/TestingFooter';

const routing = (
    <div>
        <BrowserRouter>
            <TestingMiniDrawer />
            <Switch>
                <Route exact path="/" component={Trades} />
                <Route path="/trades" component={Trades} />
                <Route path="/exceptions" component={Exceptions} />
                <Route path="/admin" component={Admin} />
                <Route component={NotFound} />
            </Switch>
            <TestingFooter />
        </BrowserRouter>
    </div>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
