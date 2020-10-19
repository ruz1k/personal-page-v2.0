import React from "react";
import Fade from "react-reveal/Fade";
import {Card, Col, Divider, Image, Row} from "antd";

import {me} from '../../../img'

import './resume.sass'

const Resume = () => {
  return (
    <Row className='resume'>
      <Col xl={20} xs={24} md={20} lg={20}>
        <Fade top cascade>
          <Card bordered={false}>
            <Row>
              <Col xs={24} md={5} lg={5} xl={5}>
                <h1>Resume</h1>
              </Col>
              <Divider/>
              <Col xs={24} xl={12} md={12} lg={12}>
                <Image
                  style={{maxWidth: "400px", width: "100%"}}
                  src={me}
                  preview={false}
                />
              </Col>
              <Col xs={24} xl={12} md={12} lg={12}>
                <ul>
                  <li>Name: Artur Romanchev</li>
                  <li>Age: 18 years old</li>
                  <li>Position: Frontend</li>
                  <li>Education: KSTU Kazan</li>
                  <li>Work experience: 1 June - present time</li>
                  <li>Main Technologies: JavaScript, React+Redux, Sass</li>
                  <li>Other Technologies: Python, Django, HTML, CSS</li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Fade>
        <Divider/>
      </Col>
    </Row>
  )
}

export default Resume