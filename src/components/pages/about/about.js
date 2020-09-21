import React from 'react'

import Fade from 'react-reveal/Fade'
import {
  Image,
  Col,
  Row,
  Divider,
  Card,
  List
} from "antd";

import {
  reactRedux,
  helloWorld,
  plastinka,
  telegram,
  plenka,
  solid,
  blog,
  me2,
  js
} from '../../../img'


import './about.sass'

const {Meta} = Card

const About = () => {
  const data = [
    {
      title: 'JavaScript',
    },
    {
      title: 'React + Redux'
    }
  ]
  return (
    <Row className='about'>
      <Col xl={20} xs={24} md={20} lg={20}>
        <Fade left cascade>
          <Card bordered={false}>
            <Row>
              <Col xs={24} md={5} lg={5} xl={5}>
                <h1>Biography</h1>
              </Col>
              <Divider/>
              <Col xs={24} xl={12} md={12} lg={12}>
                <Image
                  style={{maxWidth: "350px", width: "100%"}}
                  src={me2}
                />
              </Col>
              <Col xs={24} xl={12} md={12} lg={12}>
                <p>My name is Artur Romanchev, I am 18 years old, I live in the city of Kazan.
                  I study in the first year of the Kazan National Research University at the Department of Informatics
                  and Computer Engineering.<br/><br/>
                  I've been programming for about two years.
                  For a year and a half I studied in local conditions: I watched lectures, webinars, solved problems
                  from codewars,
                  and also went through school 21, but due to the pandemic, the school had to close.
                  I spent most of my time on the Python language, but soon I decided to read a book on JavaScript and I
                  liked this language.<br/><br/>
                  Then I found a job at HeadHunter and got a job in an international company as a Frontend trainee, but
                  I had already grown to Junior.
                  I love what I do and approach it with hard work and trepidation!
                </p>
              </Col>
            </Row>
          </Card>
        </Fade>
        <Fade right cascade>
          <Card bordered={false}>
            <Row>
              <Col xs={24} md={23} lg={23} xl={23}>
                <h1 className='technologies'>Technologies</h1>
              </Col>
              <Divider/>
              <Col xs={24} md={12} lg={12} xl={12}>
                <h2>JavaScript</h2>
                <p>I've been writing Javascript code,
                  more than eight months of which five locally and three in the workplace.
                  I like the work related to the functionality and visual part of the site.
                </p>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12}>
                <Image src={js} style={{maxWidth: '200px', width: '100%'}}/>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12} style={{marginTop:"50px"}}>
                <h2>React+Redux</h2>
                <p>I started learning JavaScript thanks to the React framework.
                  I learned the language along with the framework.
                  Also I'm not going to dwell on one React, I'm learning Vue.
                  In the future, he will learn how to write TypeScript programs.<br/> <br/>
                  I got acquainted with Redux at work, my mentor gave me a job, it was to supplement the project and
                  support it.
                  Working with Redux consisted in making a request to the server and writing data to the array and using
                  action to change its state.
                  That's how I learned to work with him!
                </p>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12}>
                <Image src={reactRedux} style={{maxWidth: '400px', width: '100%',  marginTop:"50px"}}/>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12} style={{marginTop:"50px"}}>
                <h2>About OOP and Patterns</h2>
                <p>For all my time teaching programming, I learned OOP principles and SOLID.
                  I am also currently studying different patterns and reading the book "Head First | Design Patterns" by Eric Freeman and Elizabeth Robson.
                  I strive to write clear and elegant code in the future!
                </p>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12}>
                <Image src={solid} style={{maxWidth: '400px', width: '100%',  marginTop:"50px"}}/>
              </Col>
            </Row>
          </Card>
        </Fade>
        <Fade left cascade>
          <Row className='card-projects'>
            <Col xs={24} xl={24} lg={24} md={24}>
              <Card bordered={false}>
                <Row>
                  <Col xs={12} md={5} lg={5} xl={5}>
                    <h1>Projects</h1>
                  </Col>
                  <Divider/>
                  <Col xs={24} xl={12} md={12} lg={12}>
                    <a href='http://u89163.test-handyhost.ru/'>
                      <Card
                        bordered={false}
                        hoverable
                        cover={<img alt="example" src={helloWorld} style={{maxHeight: '350px', height: '100%'}}/>}
                      >
                        <Meta title="Hello, World" description="http://u89163.test-handyhost.ru/"/>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} xl={12} md={12} lg={12}>
                    <a href='https://tlgg.ru/@ArttiBot'>
                      <Card
                        bordered={false}
                        hoverable
                        cover={<img alt="example" src={telegram} style={{maxHeight: '350px', height: '100%'}}/>}
                      >
                        <Meta title="Telegram bot places" description="https://tlgg.ru/@ArttiBot"/>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} xl={8} md={8} lg={8}>
                    <a href='http://print716.ru/'>
                      <Card
                        bordered={false}
                        hoverable
                        cover={<img alt="example" src={plenka}/>}
                      >
                        <Meta title="Site for photostudio" description="www.instagram.com"/>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} xl={8} md={8} lg={8}>
                    <a href='http://aromanchevblog.pythonanywhere.com/'>
                      <Card
                        bordered={false}
                        hoverable
                        cover={<img alt="example" src={blog}/>}
                      >
                        <Meta title="My Django blog" description="www.aromanchevblog.pythonanywhere.com"/>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} xl={8} md={8} lg={8}>
                    <a href='http://lilarttimusic.pythonanywhere.com/'>
                      <Card
                        bordered={false}
                        hoverable
                        cover={<img alt="example" src={plastinka}/>}
                      >
                        <Meta title="My music site" description="http://lilarttimusic.pythonanywhere.com"/>
                      </Card>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Col>
    </Row>
  )
}

export default About