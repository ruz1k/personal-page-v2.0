import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {Row, Col, Card, Image} from 'antd'
import {A} from 'hookrouter'

import './home.sass'

const Home = () => {
  return (
    <>
      <div className='home-background'>
        <Fade bottom>
          <h1>Junior-front-end developer</h1>
        </Fade>
      </div>
      <Row className="list">
        <Col xl={12} md={16} lg={16} xs={24}>
          <Card title="Card title">
            <Slide left>
            <Card type="inner" title="About" extra={<A href="/about">Check it</A>}>
              <Row>
                <Col xl={14} xs={24} md={14}>
                  <p>
                    Inner Card contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner
                    Card contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner Card contentInner Card content</p>
                </Col>
                <Col xl={10} xs={24} md={10}>
                  <Image
                    style={{maxWidth: '200px', width: '100%'}}
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
              extra={<a href="#">More</a>}
            >
              <Row>
                <Col xl={10} xs={24} md={10}>
                  <Image
                    style={{maxWidth: '200px', width: '100%'}}
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col xl={14} xs={24} md={14}>
                  <p>
                    Inner Card contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner
                    Card contentInner Card contentInner Card contentInner Card contentInner Card contentInner Card
                    contentInner Card contentInner Card content</p>
                </Col>
              </Row>
            </Card>
            </Slide>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home