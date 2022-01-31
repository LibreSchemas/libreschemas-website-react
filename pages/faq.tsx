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
        <p>To be a free and permanent contribution to the Neurodiversity movement. The code and datasets in the LibreSchemas repositories can be used again in other projects without our permission (anyone can copy provided they adhere to the Copyleft license). Additionally, it can be a resource for learning and collaboration  (a form of coproduction) besides the usual medium of social media and engagement from public services.</p>
        <b>Why is LibreSchemas using a Strong Copyleft license rather than a Permissive License?</b>
        <p>We want to limit a <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Free-rider_problem">Free-rider problem</a> whereby individuals or organisations could potentially use our software to benefit financially and not return the favour by publishing any modifications or upgrades they made as Free and Open Source Software (FOSS).</p>
        <b>What is the difference between NeuroSchemas and LibreSchemas?</b>
        <p><a target="_blank" rel="noreferrer" href="https://neuroschemas.app">NeuroSchemas</a> is a Google Play and Apple App Store App developed by Shaun Vos on behalf of his company Dev Mindset which owns the copyright. NeuroSchemas uses React Native but doesn&apos;t use the beginner friendly Expo. NeuroSchemas contains copyrighted works that Dev Mindset owns and has license to use from other providers such as stock photo images.<br/> LibraSchemas is Free and Open Source Software (FOSS) released under Copyleft licenses and contains only copyrighted works permitted to be used under Copyleft. Though some code has been ported over from NeuroSchemas as well as much being written from scratch.</p>
        <b>Who controls the LibreSchemas Project?</b>
        <p><a target="_blank" rel="noreferrer" href="https://github.com/devmindset-shaunvos">Shaun Vos</a> presently controls this website as main author and has admin rights (e.g. to approve changes to the LibreSchemas repositories on GitHub).  If more people want to contribute then sharing the power for the benefit of all isn&apos;t an issue. If you prefer to fork (copy) the project and start your own then that is acceptable under the Copyleft licenses.</p>
        <b>How can I submit Schemas to the Free and Open Source Datasets?</b>
        <p>You can use <a target="_blank" rel="noreferrer" href="/files/libreschemas_generic_schema_template.xlsx">this Excel template for now</a> and either email us or push it into the relevant GitHub Datasets Repositories. If you are confident with the JSON file format then you can just create your own and push it into the datasets repositories. We would like to eventually create a form online that allows you to submit Schemas (any volunteers?).</p>
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