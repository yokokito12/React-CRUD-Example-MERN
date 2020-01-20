import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Container } from 'react-materialize'; 


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {profile: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/profile')
        .then(response => {
          this.setState({ profile: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    
    tabRow(){
      return this.state.profile.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <Container>
         <div style={{marginTop: 100}}>
          <h3 align="center">Profiles List</h3>
            <tbody>
              { this.tabRow() }
            </tbody>
        </div>
    </Container>
      );
    }
  }