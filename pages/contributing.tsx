import type { ReactElement } from 'react'
import Layout from '../components/layout'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

function Contributing() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">Contributing</h2>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h5>Contributing to LibreSchemas</h5>
          <p>Notes</p>
          <ul>
            <li>co-production</li>
            <li>Reciprocity</li>
            <li>Not just for coders (images, content) point to learning</li>
            <li>https://apo.org.au/node/312607</li>
            <li>point to learning javascript and photoshop.</li>
          </ul>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

Contributing.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Contributing