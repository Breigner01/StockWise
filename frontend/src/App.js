import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";

import Home from "./pages/Home";
import PrivatePage from "./pages/PrivatePage";
import LoginUser from "./pages/auth/LoginUser";
import RegisterUser from "./pages/auth/RegisterUser";
import WarehouseManagement from "./pages/WarehouseManagement";


const App = () => {
  const homePath = "/";
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Private Pages for User*/} 
          <Route path={homePath} element={<PrivateRoute redirect={"/login"} />} >
            <Route path="" element={<Home />}>
              <Route index element={<WarehouseManagement />} />
              <Route path="home" element={<WarehouseManagement />} />
              <Route path="private" element={<PrivatePage />} />
            </Route>
          </Route>

          {/* Public Pages for Auth*/}  
          <Route path={homePath} element={<PublicRoute redirect={"/home"} />} >
            <Route path="login" element={<LoginUser />} />
            <Route path="register" element={<RegisterUser redirect={"/login"} />} />
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
