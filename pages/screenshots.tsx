/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Website using React Next.js.

    LibreSchemas Website using React Next.js is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Website using React Next.js is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Website using React Next.js. If not, see <https://www.gnu.org/licenses/>.
*/

import type { ReactElement } from 'react'
import Layout from '../components/layout'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

function Documentation() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col md={12}>
          <h2 className="text-center">Screenshots</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h5 className="text-center">LibreSchemas Version 1.3.0</h5>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot7.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot9.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot8.jpeg" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot3.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot1.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot6.jpeg" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot2.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot5.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot4.jpeg" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot14.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot16.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot15.jpeg" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot10.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot11.jpeg" />
        </Col>
        <Col md={4}>
          <Image src="/images/screenshot12.jpeg" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src="/images/screenshot13.jpeg" />
        </Col>
      </Row>

    </Container>
    </div>
  )
}

Documentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Documentation