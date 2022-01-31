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
import { HandIndexThumb } from 'react-bootstrap-icons'


function Index() {
  return (
  <div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">About</h2>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>The LibreSchemas project is a ongoing project of Free and Open Source Software (FOSS), under various Copyleft licenses, that are designed to help those who identify as Neurodivergent (read more about the Neurodiversity Movement <a target="_blank" rel="noreferrer" href="https://neurodiversity2.blogspot.com/p/what.html">here</a>). Libre means being “free, having liberty, at liberty” in Spanish and French.  Liberty is an important principle for the Neurodiversity Movement as having free will and the right to be different in the pursuit of happiness are considered inalienable rights to most people. The Schemas part of LibreSchemas was originally derived from <a target="_blank" rel="noreferrer" href="https://neuroschemas.app">NeuroSchemas</a>, an original App created by Shaun Vos, that was released in June 2021 to assist Autistic people in learning the hidden curriculum from its Social Schemas. The mission of the LibreSchemas project is to create and make FOSS that the Neurodiverse community finds helpful as well as making it accessible for the community to new learn skills and contribute for the benefit of all Neurodiverse people. By the project being Open Source, the source code is made freely available for modification and redistribution which allows anyone to start their own projects (even if this project is discontinued) or co-produce LibreSchemas.</p>
          <h5 className="text-start">Copyleft vs Copyright Licensing</h5>
          <p>Many are familiar with the term Copyright whereby the creator or owner of a creative work has the exclusive right to distribute and adapt a work plus the economic rights on how it is used. Creators can mark their work with the <span style={{ fontWeight: "bold" }}>©</span> symbol to indicate copyright since the Berne Convention of 1886. Examples of proprietary copyrighted work are <a target="_blank" rel="noreferrer" href="https://www.office.com">Microsoft Office</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com">Twitter</a>, the <a target="_blank" rel="noreferrer" href="https://www.britannica.com">Encyclopædia Britannica</a> and NeuroSchemas.</p>
          <p>Copyleft is a method of using the copyright to make a work free and requiring all modified and extended versions to be &quot;Free&quot; as well. &quot;Free&quot; in this case doesn&apos;t mean free as &quot;Free Beer&quot; but as in freedom to make your own. Copyleft is based on the four freedoms:</p>
          <ul>
            <li>The freedom to use the work.</li>
            <li>The freedom to study the work.</li>
            <li>The freedom to copy and share the work with others.</li>
            <li>The freedom to modify the work, and the freedom to distribute modified and therefore derivative works.</li>
          </ul>
          <p>Some creators conversely use the Copyleft Symbol <span style={{ fontWeight: "bold", display: "inline-block", transform: "rotate(180deg)" }}>&copy;</span> to mark their work (have a look at our logo) but this has no legal status. Copyright owners therefore issue creative work under license (a right under copyright) that meet the four freedoms and perhaps additional social objectives of the project.</p>
          <p>
            The most popular FOSS licenses used today have Philosophical differences:</p>
            <ul>
            <li><b>Permissive licenses</b> grant the right to relicense work as well as to modify derivatives and sell (publishing the modified source is optional). Popular Permissive licenses include the MIT License for software and <a target="_blank" rel="noreferrer" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons BY 4.0</a> <a target="_blank" rel="noreferrer" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a> for general works. Software under the MIT license tends to be integrated as a foundation into new software such as <a target="_blank" rel="noreferrer" href="https://nodejs.org/">Node.JS</a> and <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React</a> which are used to create websites and applications today.</li>
            <li><b>Weak Copyleft licenses</b> meet the definition of Copyleft software but is permissive in allowing only the original modified software code to be published. Under Weak Copyleft licensed code it maybe possible to publish Proprietary software without being required to publish all the Proprietary software source code. This can create legal and technical ambiguity so usually software libraries use this form of license. Popular Permissive licenses include the <a target="_blank" rel="noreferrer" href="https://www.mozilla.org//MPL/">Mozilla Public License 2.0</a> and the <a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/lgpl-3.0.html">GNU Lesser General Public License Version 3</a>. <a target="_blank" rel="noreferrer" href="https://www.mozilla.org/firefox">Mozilla Firefox</a>, <a target="_blank" rel="noreferrer" href="https://www.libreoffice.org">LibreOffice</a> and the <a target="_blank" rel="noreferrer" href="https://www.torproject.org/">Tor Project</a> (a derivative of Firefox) are examples of software that use the Mozilla Public License 2.0.</li>
            <li><b>Strong Copyleft licenses</b> meet the definition of Copyleft software requiring all software and its derived work to have its source code published. Under Strong Copyleft a creator would have to publish their source code in full if it contains any software code with such a license. Popular Strong Copyleft licenses (from Strong to Strongest) incudes the <a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html">GNU General Public License Version 2</a>, <a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License Version 3</a> and <a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html">GNU Affero General Public License Version 3</a>. Another notable mention for general work is the <a target="_blank" rel="noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons BY-SA 4.0</a> <a target="_blank" rel="noreferrer"
             href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a> which is <a target="_blank" rel="noreferrer" href="https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses">one-way  compatible</a> to the GNU General Public License Version 3. This would permit the use of CC-BY-SA 4.0 content for use in source code for the purposes under GNU Lesser General Public License Version 3. <a target="_blank" rel="noreferrer" href="https://joinmastodon.org">Mastodon</a>, <a target="_blank" rel="noreferrer" href="https://wordpress.org">Wordpress</a>, <a href="https://www.mysql.com/products/community/">MySQL</a>, <a target="_blank" rel="noreferrer" href="https://mariadb.org/">MariahDB</a> (derived from MySQL) are examples of software that use the GNU General Public License. Wikipedia&apos;s content (such as text and images) is licensed under <a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons BY-SA 3.0</a> <a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/3.0/80x15.png" /></a> and it&apos;s software <a href="https://www.mediawiki.org/">MediaWiki</a> under the GNU General Public License Version 2. </li>
            </ul>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5>Distribution and Licensing of LibreSchemas</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>LibreSchemas isn&apos;t currently available as a binary (such as a ready made installable software like an .exe for Windows or .apk for Android). In time we hope to release to multiple platforms. Though it may never be available in some App stores as the App store operator may have terms of service that are incompatible with the distribution of Copyleft licensed Software. Though we have provided a App Store Exception to the license that allows the publisher to satisfy the requirements of distributing the source code through a channel without these restrictive terms of service.</p>
          <p>LibreSchemas consists of seperate software that could be used in isolation if the appropriate software is developed. Therefore the source code has been packaged and licensed seperately with it&apos;s own GitHub repository as follows:
          </p>
          <ul>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client-react-native-expo">LibreSchemas Client using React Native Expo</a></li>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client-react-native">LibreSchemas Client using React Native </a></li>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-server-api-react">LibreSchemas Server API using React Next.js</a></li>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-website-react">LibreSchemas Website using React Next.js</a></li>
                                </ul>
          <p>Additionally, the datasets have three distinct GitHub repositories under the licenses of the Creative Commons BY-SA 4.0, GNU General Public License Version 3 and GNU Affero General Public License Version 3. The datasets have been licensed this way to meet different contributors needs. The datasets are in JSON format only and designed to be imported into a database.</p>
                              <ul>
                              <li className='mb-1'><a target="_blank" rel="noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"><Image src="/images/cc-by-sa-4-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets">LibreSchemas Datasets</a></li>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/gpl-3.0.en.html"><Image style={{background:"white"}} src="/images/gplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-datasets-gplv3">LibreSchemas Datasets</a></li>
                                <li className='mb-1'><a target="_blank" rel="noreferrer" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" rel="noreferrer" href="https://github.com/LibreSchemas/libreschemas-client-react-native">LibreSchemas Datasets</a></li>
                            </ul>
        </Col>
        </Row>
        <Row>
        </Row>

    </Container>
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Index