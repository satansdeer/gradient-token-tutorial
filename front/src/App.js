import React, { Component } from "react";
import { Provider } from "mobx-react";
import Modal from "components/Modal";
import TokensPage from "./TokensPage";
import stores from "./stores";
import "./App.css";

stores.contractsStore.setup();

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Modal />
          <TokensPage />
        </div>
      </Provider>
    );
  }
}

export default App;
