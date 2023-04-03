import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";

import Home from "./pages/Home";
import PrivatePage from "./pages/PrivatePage";
import PublicPage from "./pages/PublicPage";


const App = () => {
  const homePath = "/";
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Private Pages for User*/} 
          <Route path={homePath} element={<PrivateRoute redirect={"/public"} />} >
            <Route path="" element={<Home />}>
              <Route path="private" element={<PrivatePage />} />
            </Route>
          </Route>

          {/* Public Pages for Auth*/}  
          <Route path={homePath} element={<PublicRoute redirect={"/private"} />} >
            <Route path="public" element={<PublicPage />} />
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
