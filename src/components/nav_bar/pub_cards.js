import React from 'react';
import { Card, Col, Row, CardTitle, Icon } from 'react-materialize'


const pubcard =()=>(
    <main>
    <Row>
        <Col
            m={6}
            s={12}
        >
            <Card
                actions={[
                <a key="1" href="#">This is a Link</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="http://www.ucm.minfin.gov.ao/cs/groups/public/documents/document/mzu5/ntqy/~edisp/logo-tistec1504359542361.png">Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                >
                Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>
    </main>
);

export default pubcard;