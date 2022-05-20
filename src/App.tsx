import React from "react";
import routes from "./routers/index";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { composeStore } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={composeStore}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>
  );
};

export default App;
