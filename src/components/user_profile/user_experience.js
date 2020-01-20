import React from 'react'
import {Card, Row, Col} from 'react-materialize';



const UserExperience =(props)=>(
  
      <Card>   
       <Row style={{
        width: "100px",
        height: "10px"}} >
      
    
        <Col>
                <img src={props.avatar} className="circle responsive-img"  alt="" />
             
                { props.nome }     
            </Col>
            </Row>
     <ul>
            <li>
                <p><b>{props.title} in <span>{props.company}</span></b></p>
                <p>{props.description}</p>
            </li>
      </ul>
    </Card>
  );

export default UserExperience;
