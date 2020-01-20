import React from "react";
import {Navbar,NavItem, Row} from 'react-materialize';
import Leftbar from '../nav_bar/left_bar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateProfile from '../createprofile';
import EditProfile from '../editprofile';
import HomeView from '../homeview';



const header =()=>(

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
   
    

);

export default header;