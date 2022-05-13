import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/PageContext";

import RoutesComponents from "./routes";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <RoutesComponents />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
