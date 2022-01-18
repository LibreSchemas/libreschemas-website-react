/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas.org Website for React.

    LibreSchemas.org Website for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas.org Website for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas.org Website for React. If not, see <https://www.gnu.org/licenses/>.
*/
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function Footer() {
    return (
        <div style={{background: '#1A5653'}}>
        <div className="pt-3" style={{color:"white", bottom: 0, width: "100%"}}>
            <Row className="p-3">
                <Col sm={12} lg={3}>
                    <h6 className="text-uppercase">SOCIAL MEDIA</h6>
                    <Stack direction="horizontal" gap={3}>
                        <a href="https://twitter.com/LibreSchemas" target="_blank"><Image height="50" width="50" src="https://api.neuroschemas.app/images/twitter_icon.png" /></a>
                        <a href="https://www.facebook.com/libreschemas" target="_blank"><Image height="50" width="50" src="https://api.neuroschemas.app/images/facebook_icon.png" /></a>
                        <a href="https://www.instagram.com/libreschemas" target="_blank"><Image height="50" width="50" src="https://api.neuroschemas.app/images/instagram_icon.png" /></a>
                    </Stack>
                </Col>
                <Col sm={12} lg={6}>
                    <Row>
                        <Col className="my-2" sm={12} lg={8}>
                            <h6 className="text-uppercase">OUR FREE COPYLEFT REPOSITORIES</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={12}>
                            <ul className="list-unstyled">
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-client-react-native-expo">LibreSchemas Client using React Native Expo</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-client-react-native">LibreSchemas Client using React Native</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-server-api-react">LibreSchemas Server API using React Next.js</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-website-react">LibreSchemas Website using React Next.js</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><Image src="/images/cc-by-sa-4-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-datasets">LibreSchemas Datasets</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html"><Image style={{background:"white"}} src="/images/gplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-datasets-gplv3">LibreSchemas Datasets</a></li>
                                <li className='mb-1'><a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><Image style={{background:"white"}} src="/images/agplv3-88x31.png" /></a> <a target="_blank" style={{ color: "#FFFFFF" }}href="https://github.com/LibreSchemas/libreschemas-datasets-agplv3">LibreSchemas Datasets</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </div>
        </div>
    )
}
  
export default Footer