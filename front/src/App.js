import React, { Component } from "react";
import { Provider } from "mobx-react";
import Modal from "components/Modal";
import TokensPage from "./TokensPage";
import TokensList from "./TokensPage/TokensList";
import stores from "./stores";
import "./App.css";

stores.contractsStore.setup();

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Modal />
          <TokensPage>
            <TokensList />
          </TokensPage>
        </div>
      </Provider>
    );
  }
}

export default App;
