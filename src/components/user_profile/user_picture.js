import React from 'react'
import { Card, Row, Col } from 'react-materialize'


const UserPicture = props => (
  <Card style={{ 
        width: "180px",
        height: "450px",
      }} >
      <Row>
        <Col style={{ 
        width: "160px",
        
      }} >
          <img src={props.foto} className="circle responsive-img"alt="" />
        </Col>
      </Row>
      <Row className='center-align'>
      
        <h5>{props.nome}</h5>
        <p className='grey darken-2 white-text'>{props.cargo}</p>
    </Row>
  </Card>
)

export default UserPicture
