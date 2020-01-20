import React from 'react'
import {Card,Col,Row} from 'react-materialize';

const UserResume = (props) =>(
      <Card>
       <Row>
          <Col>
              <h5>Resumo</h5>
              <p>{props.resumo}</p>
          </Col>
      </Row>
    </Card>

  );

export default UserResume;
