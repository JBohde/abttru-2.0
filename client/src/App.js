import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import UserInfo from './pages/UserInfo';
import User from './pages/User';
import PatientSavedRecipe from './pages/PatientSavedRecipe';
import Guest from './pages/Guest';
import UserLogin from './pages/User/UserLogin/UserLogin';
import DoctorLogin from './pages/Doctor/DoctorLogin/DoctorLogin';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter keyLength={12}>
        <div className="abttru">
          <NavigationBar />
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/doctor/:id" component={Doctor} />
            <Route path="/doctorlogin" component={DoctorLogin} />
            <Route path="/create/:id" component={CreateUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/show/:id" component={UserInfo} />
            <Route path="/user/:id" component={User} />
            <Route path="/userlogin" component={UserLogin} />
            <Route path="/savedrecipes/:id" component={PatientSavedRecipe} />
            <Route path="/guest" component={Guest} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
