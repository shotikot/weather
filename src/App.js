import React from "react";
import CurrentCity from "./components/CurrentCity";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CurrentCity />
      </div>
    </Provider>
  );
}

export default App;
