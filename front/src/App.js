import React, { Component } from "react";
import "./App.css";
import TokensList from "./TokensList";
import { Provider } from "mobx-react";
import Modal from "components/Modal";

import stores from "./stores";
stores.contractsStore.setup();

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Modal />
          <TokensList />
        </div>
      </Provider>
    );
  }
}

export default App;
