import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import Adduser from "./components/users/Adduser";
import Navbar from "./components/layout/Navbar";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/About" Component={About}></Route>
          <Route exact path="/Contact" Component={Contact}></Route>
          <Route exact path="/user/add" Component={Adduser}></Route>
          <Route exact path="/user/edit/:id" Component={EditUser}></Route>
          <Route exact path="/user/:id" Component={User}></Route>
          <Route exact path="*" Component={PageNotFound}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
