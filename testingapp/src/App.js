import React from 'react';
import './App.css';

import TestingFooter from './components/TestingFooter/TestingFooter';
import TitleBar from './components/TitleBar/TitleBar';
import Trades from './containers/Trades/Trades';
import Exceptions from './containers/Exceptions/Exceptions';
import Admin from './containers/Admin/Admin';
import NotFound from './components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <TitleBar />
          </Col>
        </Row>

        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={Trades} />
              <Route path="/trades" component={Trades} />
              <Route path="/exceptions" component={Exceptions} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </Row>

        <Row>
          <Col>
            <TestingFooter />
          </Col>
        </Row>
      </Container>

      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
