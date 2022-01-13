import type { ReactElement } from 'react'
import Layout from '../components/layout'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

function About() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">About</h2>
          </Col>
      </Row>
      <Row>
        <Col md={8}>
          Under Construction.
        </Col>
    </Row>
    </Container>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default About