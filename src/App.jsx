import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./fontello/css/fontello.css"

import { PersistGate } from "redux-persist/integration/react";

// import redux
import { Provider } from "react-redux";
import configureStore from "./store";

import Full from "./container/Full";

export const history = createBrowserHistory();
const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Router history={history}>
              <Full />
            </Router>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
