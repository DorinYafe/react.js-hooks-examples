import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom';
import { createBrowserHistory, } from 'history';
import EffectAndRef from './components/EffectAndRef/EffectAndRef';
import Hoc from './components/Hoc/Hoc';
import RenderProps from './components/RenderProps/RenderProps';
import Navigation from './components/Navigation/Navigation';
import Context from './Context/Context';
import UseStateExample from './components/UseStateExample/UseStateExample';
import UseEffectExample from './components/UseEffectExample/UseEffectExample';
import UseLayoutEffectExample from './components/UseLayoutEffectExample/UseLayoutEffectExample';
import UseCallbackExample from './components/UseCallbackExample/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample/UseMemoExample';
import UseReducerExample from './components/UseReducerExample/UseReducerExample';
import UseContextExample from './components/UseContextExample/UseContextExample';

const history = createBrowserHistory();
const { Provider, } = Context;

function App() {
  return (
    <>
      <Provider value={history}>
        <Navigation />
      </Provider>
      <Router history={history}>
        <Switch>
          <Route exact path="/effectandref" component={EffectAndRef} />
          <Route exact path="/" component={EffectAndRef} />
          <Route exact path="/hoc" component={Hoc} />
          <Route exact path="/renderprops" component={RenderProps} />
          <Route exact path="/state" component={UseStateExample} />
          <Route exact path="/effect" component={UseEffectExample} />
          <Route exact path="/layout" component={UseLayoutEffectExample} />
          <Route exact path="/callback" component={UseCallbackExample} />
          <Route exact path="/memo" component={UseMemoExample} />
          <Route exact path="/reducer" component={UseReducerExample} />
          <Route exact path="/context" component={UseContextExample} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
