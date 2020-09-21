import React from 'react'


import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {Row, Col, Card, Image} from 'antd'

import {A} from 'hookrouter'

import {me2, me} from '../../../img'

import './home.sass'

const Home = () => {
  return (
    <div className="home">
      <div className='home-background'>
        <Fade bottom>
          <h1>Frontend developer</h1>
          <h2>Artur Romanchev.</h2>
        </Fade>
      </div>
      <Row className="list">
        <Col xl={16} md={16} lg={16} xs={24}>
          <Card title="Preview" bordered={false}>
            <Slide left>
              <Card type="inner" style={{fontSize: '12pt'}} title="About" bordered={false} extra={<A href="/about">Read</A>}>
                <Row>
                  <Col xl={14} xs={24} md={14}>
                    <p>
                      My name is Artur Romanchev, I am 18 years old, I live in the city of Kazan.
                      I study in the first year of the Kazan National Research University at the Department of
                      Informatics
                      and Computer Engineering.....</p>
                  </Col>
                  <Col xl={10} xs={24} md={10}>
                    <Image
                      style={{maxWidth: '200px', width: '100%'}}
                      preview={false}
                      src={me2}
                    />
                  </Col>
                </Row>
              </Card>
            </Slide>
            <Slide right>
              <Card
                style={{marginTop: 16}}
                type="inner"
                title="Resume"
                style={{fontSize: '12pt'}}
                extra={<A href="/resume">Check it</A>}
                bordered={false}
              >
                <Row>
                  <Col xl={10} xs={24} md={10}>
                    <Image
                      style={{maxWidth: '400px', width: '100%'}}
                      preview={false}
                      src={me}
                    />
                  </Col>
                  <Col xl={14} xs={24} md={14}>
                    <p style={{paddingLeft: "10px"}}>
                      On this page you can see my resume in HeadHunter.
                      Click on "Check it" to see my resume and pick up with my work experience!
                    </p>
                  </Col>
                </Row>
              </Card>
            </Slide>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home