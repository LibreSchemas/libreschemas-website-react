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

function ContactUs() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">Contact Us</h2>
          </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p>You can contact us via email at <a href="mailto:support@libreschemas.org">support@libreschemas.org</a></p>
          <p>You also contact us via the Social Media links at the bottom of the page or in the GitHub Issue and Discussion tabs of our public repositories</p>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ContactUs