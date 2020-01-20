import React, { Component } from 'react';
import UserPicture from './user_profile/user_picture';
import UserResume from './user_profile/user_resume';
import quifu from '../imagens/quifu.png';
import { Card, Row, Col, Container } from 'react-materialize'
import axios from 'axios';
import { Link } from 'react-router-dom';

import UserComponent from './user_profile//user_component';

class TableRow extends Component {

constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/profile/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  
  render() {
    return (

<Card className='grey darken-2 '>
<Container>
 <tr>
     <td>
        <div>
 <Card style={{ 
        width: "180px",
        height: "450px",
      }} >

      <Row>
        <Col style={{ 
        width: "160px",
      }} >

          <img src={quifu} className="circle responsive-img"alt="" />
        
        </Col>
      </Row>
      <Row >
      
        <h5 className='center-align'>
        {this.props.obj.person_name}
        </h5><br/>
        
        <p className='grey darken-2 white-text'>
        {this.props.obj.person_Duty}</p>
        <br/>
        
        <tr>
         <th>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-success">Edit</Link>
            </th>
            <th>
            <button onClick={this.delete} className="btn btn-danger">Del</button>
            </th>  
          </tr>
        
    </Row>
     </Card>
    
    </div>
     </td>
    <td>
      <Card style={{ 
        width: "700px",
        height: "210px",
      }}>
       <Row >
          <Col>
              <h5>Resumo</h5>
              <p>{this.props.obj.person_Resumo}</p>
          </Col>
      </Row>
    </Card>
     <td>
      <Card style={{ 
        width: "700px"
      }}>
       <Row>
          <Col>
              <h5>Experience</h5>
              <p>{this.props.obj.person_Experience}</p>
          </Col>
      </Row>
    </Card>
         
          </td>
         
          </td>
    </tr>
    </Container>
</Card>


            
      
     );
  }
}

export default TableRow;