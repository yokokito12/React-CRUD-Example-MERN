import React from 'react';
import { Row, Col } from 'react-materialize';
import UserPicture from './user_picture';
import UserResume from './user_resume';
import UserExperience from './user_experience';


const UserComponent = props => (
   //<Col className="col s2.0 yellow lighten-4">
    <header>  
 
    <Row >
    <Col>
        <UserPicture  
             
        />
        
          </Col> 
            <Row>
              <Col style={{ 
              width: "700px",
            }}>
                <UserResume 
                 
                  />
              </Col> 
              <Col style={{ width: "700px"}}>
                      <UserExperience
                        
                            />
                   
               </Col>   
        </Row>
    </Row>
    </header>
 
)

export default UserComponent
