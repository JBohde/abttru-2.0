import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserInfo from "./components/UserInfo";
import User from "./components/User";
import PatientSavedRecipe from "./components/PatientSavedRecipe";
import Guest from "./components/Guest";
import UserLogin from "./components/User/UserLogin/UserLogin";
import DoctorLogin from "./components/Doctor/DoctorLogin/DoctorLogin";
import "./App.css";

class App extends Component {
  render() {

    return (
      <BrowserRouter keyLength={12}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/doctor/:id" component={Doctor} />
          <Route path="/doctorLogin" component={DoctorLogin} />
          <Route path="/create" component={CreateUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/show/:id" component={UserInfo} />
          <Route path="/user/:id" component={User} />
          <Route path="/userLogin" component={UserLogin} />
          <Route path="/savedrecipes" component={PatientSavedRecipe} />
          <Route path="/guest" component={Guest} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
