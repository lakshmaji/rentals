import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import { store } from "./state/store";
import { AuthProvider } from "./auth/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <>
            <Toaster />
            <Routes />
          </>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
