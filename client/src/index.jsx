import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

import { store, history } from './store';
import { App } from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWithRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);