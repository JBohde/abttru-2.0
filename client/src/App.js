import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import DoctorLogin from './pages/Doctor/DoctorLogin';
import CreatePatient from './pages/Doctor/CreatePatient';
import EditPatient from './pages/Doctor/EditPatient';
import PatientInfo from './pages/Doctor/PatientInfo';
import User from './pages/User';
import UserLogin from './pages/User/UserLogin';
import SavedRecipes from './pages/User/SavedRecipes';
import Guest from './pages/Guest';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter keyLength={12}>
        <div className='abttru'>
          <NavigationBar />
          <div className='main'>
            <Route exact path='/' component={Home} />
            <Route path='/login/doctor' component={DoctorLogin} />
            <Route path='/doctor/:id' component={Doctor} />
            <Route path='/create/:id' component={CreateUser} />
            <Route path='/edit/:id' component={EditUser} />
            <Route path='/show/:id' component={UserInfo} />
            <Route path='/login/user' component={UserLogin} />
            <Route path='/user/:id' component={User} />
            <Route path='/savedrecipes/:id' component={SavedRecipes} />
            <Route path='/guest' component={Guest} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
