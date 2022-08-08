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
        <Col>
          <h2 className="text-center">Documentation</h2>
          </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-left">User Documentation</h3>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
          We don&apos;t have a compiled binary to download (an executable program for non-technical users) and aren&apos;t on any App Store so no user documention has been written. The source code is available from the <a href="https://github.com/LibreSchemas">LibreSchemas GitHub Repositories</a> if you are technically minded. You are welcome to contribute in discussions below.
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-left mt-3">Technical Documentation</h3>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>There is still a lot of work to do in writing technical documentation but you will not find it on this page as it is on GitHub with the <a href="https://github.com/LibreSchemas">LibreSchemas GitHub Repositories</a>.  The following links will help you get started:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-left mt-3">LibreSchemas Client</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client/wiki">Wiki</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client/discussions">Discussions</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client/issues">Issues</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client">Code Repository</a> 
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-left mt-3">LibreSchemas Server API using React Next.js</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-server-api-react/wiki">Wiki</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-server-api-react/discussions">Discussions</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-server-api-react/issues">Issues</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-server-api-react">Code Repository</a> 
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-left mt-3">LibreSchemas Website using React Next.js</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-website-react/wiki">Wiki</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-website-react/discussions">Discussions</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-website-react/issues">Issues</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-website-react">Code Repository</a> 
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-left mt-3">LibreSchemas Datasets</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>The main respository is the Creative Commons CC-BY-SA 4.0.</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets/wiki">Wiki</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets/discussions">Discussions</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets/issues">Issues</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets">CC-BY-SA Repository</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets-gplv3">GPLv3 Repository</a> | <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets-agplv3">AGPLv3 Repository</a>
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