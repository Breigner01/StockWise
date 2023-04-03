import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import PrivateRoute from "./components/routers/PrivateRoute";

import Home from "./pages/Home";
import TestPage from "./pages/TestPage";


const App = () => {
  const homePath = "/";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={homePath} element={<PrivateRoute redirect={"/test"} />} >
            <Route path="" element={<Home />}>
              <Route path="test" element={<TestPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
