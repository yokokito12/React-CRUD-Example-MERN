import React from "react";
import {Navbar,NavItem, Row} from 'react-materialize';
import Leftbar from './components/nav_bar/left_bar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateProfile from './components/createprofile';
import EditProfile from './components/editprofile';
import HomeView from './components/homeview';

import './App.css';
import Header from './components/header/header'
import Main from './main';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      
       <Row>
    
        <Navbar className="Pink darken-2" >
           <NavItem href='/'><Leftbar/></NavItem>
           <NavItem href='/HomeView'>Home</NavItem>
            <NavItem href='/CreateProfile'>Create New Profile</NavItem>    
        </Navbar>

         <Switch>
              <Route exact path='/CreateProfile' component={ CreateProfile } />
              <Route path='/EditProfile/:id' component={ EditProfile } />
              <Route path='/HomeView' component={ HomeView } />
          </Switch>

    </Row>
      <Main/>
    </div>
  );
}

export default App;
