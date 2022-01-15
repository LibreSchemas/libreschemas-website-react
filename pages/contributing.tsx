/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas.org Website for React.

    LibreSchemas.org Website for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas.org Website for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas.org Website for React. If not, see <https://www.gnu.org/licenses/>.
*/

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