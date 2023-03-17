import React from "react";
import { store } from "./redux/store";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { AuthRoute } from "./components/AuthRoute";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
