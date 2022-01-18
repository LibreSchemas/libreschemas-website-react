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

function Faq() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">FAQ</h2>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
        <b>Why has LibreSchemas been developed?</b>
        <p>To be a free and permanent contribution to the Neurodiversity movement. Much of the code and datasets in the LibreSchemas repositories could be used again in other projects without our permission (anyone can copy provided they follow the Copyleft license). Additionally, it can be a resource for learning and collaboration  (a form of coproduction) besides the usual medium of social media and engagement from public services.</p>
          <b>What is the difference between NeuroSchemas and LibreSchemas?</b>
          <p><a target="_blank" href="https://neuroschemas.app">NeuroSchemas</a> is a Google Play and Apple App Store App developed by Shaun Vos on behalf of his company Dev Mindset which owns the copyright. NeuroSchemas uses React Native but doesn't use the beginner friendly Expo. NeuroSchemas contains copyrighted works that Dev Mindset owns and has license to use from other providers such as stock photo images.<br/> LibraSchemas is Free and Open Source Software (FOSS) released under Copyleft licenses and contains only copyrighted works permitted to be used under Copyleft. Though some code has been ported over from NeuroSchemas as well as much being written from scratch.</p>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

Faq.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Faq