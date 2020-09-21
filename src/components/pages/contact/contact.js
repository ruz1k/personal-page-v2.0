import React from "react";

import {Row, Col, Divider, Card} from 'antd'

import './contact.sass'

import {
  linkedin,
  vk,
  hh,
  telegram
} from '../../../img'

const {Meta} = Card

const Contact = () => {
  return (
    <Row className='contact'>
      <Col xs={24} xl={16} lg={16} md={16}>
        <h1>Contact</h1>
        <Divider/>
        <Row gutter={16}>
          <Col xs={24} xl={6} md={6} lg={6}>
            <a
              href='https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%83%D1%80-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%87%D0%B5%D0%B2-3a2287189/'>
              <Card className='image' hoverable bordered={false}
                    cover={<img alt="example" src={linkedin}/>}>
                <Meta title="Linkedin" description="https://www.linkedin.com/"/>
              </Card>
            </a>
          </Col>
          <Col xs={24} xl={6} md={6} lg={6}>
            <a href='https://vk.com/artilil'>
              <Card className='image' hoverable bordered={false}
                    cover={<img alt="example" className='image' src={vk}/>}>
                <Meta title="VK" description="https://vk.com/artilil"/>
              </Card>
            </a>
          </Col>
          <Col xs={24} xl={6} md={6} lg={6}>
            <a href="https://t.me/Lilartti">
              <Card bordered={false} hoverable cover={<img alt="example" className='image' src={telegram}/>}>
                <Meta title="Telegram" description="https://t.me/Lilartti"/>
              </Card>
            </a>
          </Col>
          <Col xs={24} xl={6} md={6} lg={6}>
            <a href='https://kazan.hh.ru/resume/77b5a6b5ff07ce30770039ed1f5a5669523859'>
              <Card bordered={false} hoverable cover={<img alt="example" className='image' src={hh}/>}>
                <Meta title="HeadHunter" description="https://kazan.hh.ru/"/>
              </Card>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Contact